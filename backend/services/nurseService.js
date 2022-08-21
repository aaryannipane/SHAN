import NurseModel from "../models/nurseModel.js";
import bcrypt from "bcryptjs";

class NurseService{
    static createNurse = async (data) => {
        const nurse = await NurseModel.create(data);
        return nurse;
    }

    static removeNurse = async (id) => {
        const removed = await NurseModel.deleteOne({_id:id});
        return removed;
    }

    static checkPhone = async (phone) => {
        const nurse = await NurseModel.findOne({phone});
        return nurse;
    }

    static verifyNurse = async (id, phone) => {
        const nurse = await NurseModel.findOne({$and:[{_id:id}, {phone}]})
        return nurse;
    }

    static getNurses = async () => {
        const nurses = await NurseModel.find().populate("createdBy");
        return nurses;
    }

    static loginNurse = async (phone, password) => {
        let nurse = await NurseModel.findOne({phone});
        if(nurse){
            const result = bcrypt.compare(password, nurse.password);
            if(result){
                return nurse;
            }
        }
        return nurse=null;
    }
}

export default NurseService;