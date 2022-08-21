import SuperUserModel from "../models/superUserModel.js";

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
        const user = await SuperUserModel.findOne({$and:[{phone}, {password: password}]});
        return user;
    }

    static verifyUser = async (id, phone)=>{
        const user = await SuperUserModel.findOne({$and:[{_id:id, phone}]});
        return user;
    }
}

export default superUserService;