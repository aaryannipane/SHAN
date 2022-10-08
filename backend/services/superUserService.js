import SuperUserModel from "../models/superUserModel.js";
import bcrypt from "bcryptjs";

class superUserService {
    static createSuperUser = async (data)=>{
        try{
            const superUser = await SuperUserModel.create(data);
            return superUser;
        } catch(err) {
            console.log(err);
            return false;
        }
    }

    static checkPhone = async (phone) => {
        const superUser = await SuperUserModel.findOne({phone});
        // console.log(admin);
        return superUser;
    }

    static findUser = async ({phone, password}) => {

        let user = await SuperUserModel.findOne({phone});
        if(user){
            const result = await bcrypt.compare(password, user.password);
            if(result){
                return user;
            }
        }
        return user = null;
    }

    static verifyUser = async (id, phone)=>{
        const user = await SuperUserModel.findOne({$and:[{_id:id, phone}]});
        return user;
    }
}

export default superUserService;