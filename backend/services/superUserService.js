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

    static findUser = async ({username, password}) => {
        const user = await SuperUserModel.findOne({$and:[{username: username}, {password: password}]});
        return user;
    }

    static verifyUser = async (id)=>{
        const user = await SuperUserModel.findOne({_id:id});
        return user;
    }
}

export default superUserService;