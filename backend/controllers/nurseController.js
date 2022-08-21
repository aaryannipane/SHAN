import NurseService from "../services/nurseService.js";

class NurseController{
    static loginNurse = async (req, res) => {
        const {phone, password} = req.body;
        if(!phone || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        let nurse;
        try{
            nurse = await NurseService.loginNurse(phone, password)
        } catch (err) {
            console.log(err)
            return res.status(500).json({message:"DB error"})
        }

        if(!nurse){
            return res.status(401).json({message: "Invalid phone or Password"});
        }

        res.cookie("id", nurse.id, {
            httpOnly:true
        })
        res.cookie("phone", nurse.phone, {
            httpOnly:true
        })
        res.cookie("role", nurse.role, {
            httpOnly:true
        })

        res.json({user:{id: nurse.id, phone:nurse.phone}, auth:true});

    }

    static logoutNurse = async (req, res) => {
        res.clearCookie("id")
        res.clearCookie("phone")
        res.clearCookie("role")
        res.json({message:"logout success"})
    }
}

export default NurseController;