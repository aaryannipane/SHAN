import AdminModel from "../models/adminModel.js"

class AdminService{
    static createAdmin = async (data) => {
        const admin = await AdminModel.create(data);
        return admin;
    }

    static removeAdmin = async ({id}) => {
        const removed = await AdminModel.deleteOne({_id:id});
        // console.log(removed);
        return removed;
    }

    static checkUsername = async (username) => {
        const admin = await AdminModel.findOne({username});
        // console.log(admin);
        return admin;
    }

    static getAdmins = async ()=>{
        const admins = await AdminModel.find();
        // console.log(admins);
        return admins;
    }

}

export default AdminService;