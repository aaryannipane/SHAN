import AdminService from "../services/adminService.js";
import NurseService from "../services/nurseService.js";
import superUserService from "../services/superUserService.js";

class AuthController{
    static refresh = async (req, res)=>{
        const {id, phone, role} = req.cookies;
        console.log(id, phone, role);

        // check id and phone is present or not in cookie
        if(!id || !phone || !role){
            return res.status(401).json({message:"Invalid User"})
        }

        let user;
        if(role === "superuser"){
            try{
                user = await superUserService.verifyUser(id, phone);

                if(user === null){
                    return res.status(401).json({message:"Invalid User"})
                }

                // return res.json({user:{id:superUser._id, phone:superUser.phone}, auth:true})

            } catch (err) {
                console.log(err);
                return res.status(500).json({message:"DB error"})
            }
        } else if (role === "admin") {
            try{
                user = await AdminService.verifyAdmin(id, phone);

                if(user === null){
                    return res.status(401).json({message:"Invalid User"})
                }

                // return res.json({user:{id:admin._id, phone:admin.phone}, auth:true})

            } catch (err) {
                console.log(err);
                return res.status(500).json({message:"DB error"})
            }
        } else if(role === "nurse") {
            try{
                user = await NurseService.verifyNurse(id, phone);

                if(user === null){
                    return res.status(401).json({message:"Invalid User"})
                }

                // return res.json({user:{id:nurse._id, phone:nurse.phone}, auth:true})

            } catch (err) {
                console.log(err);
                return res.status(500).json({message:"DB error"})
            }
        } else {
            return res.status(401).json({message:"Invalid User"})
        }  
        
        return res.json({user:{id:user._id, phone:user.phone}, auth:true})
    }
}

export default AuthController;