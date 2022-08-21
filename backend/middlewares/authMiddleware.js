import AdminService from "../services/adminService.js";
import NurseService from "../services/nurseService.js";
import superUserService from "../services/superUserService.js";

class AuthMiddleware{

    static UserAuth = async (req, res, next)=>{
        try{
            const {id, phone, role} = req.cookies;

            if(!id || !phone || !role){
                throw new Error();
            }

            let userData;
            if(role === "superuser"){
                try{
                    userData = await superUserService.verifyUser(id, phone);
                } catch (err) {
                    console.log(err);
                    return res.status(500).json({message:"DB error"})
                }
            }else if(role === "admin"){
                try{
                    userData = await AdminService.verifyAdmin(id, phone);
                } catch (err) {
                    console.log(err);
                    return res.status(500).json({message:"DB error"})
                }
            }else if(role === "nurse"){
                try{
                    userData = await NurseService.verifyNurse(id, phone);
                } catch (err) {
                    console.log(err);
                    return res.status(500).json({message:"DB error"})
                }
            } else {
                throw new Error()
            }


            console.log(userData);
            req.user = userData;
            next();

        }catch(err){
            res.status(401).json({message:"Invalid User"});
        }
    }
    
}

export default AuthMiddleware;