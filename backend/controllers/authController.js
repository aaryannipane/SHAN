import AdminService from "../services/adminService.js";
import superUserService from "../services/superUserService.js";

class AuthController{
    static refresh = async (req, res)=>{
        const {id, username, issuper, isadmin, isnurse} = req.cookies;
        console.log(id, username, issuper, isadmin, isnurse);

        // check id and username is present or not in cookie
        if(!id || !username){
            return res.status(400).json({message:"All fields are required"})
        }

        if(issuper){
            let superUser;
            try{
                superUser = await superUserService.verifyUser(id);

                if(superUser === null){
                    return res.status(401).json({message:"Invalid User"})
                }

                return res.json({user:{id:superUser._id, username:superUser.username}, isSuper:superUser.isSuper, isAdmin:false, isNurse:false, auth:true})

            } catch (err) {
                console.log(err);
                return res.status(500).json({message:"DB error"})
            }
        } else if (isadmin) {
            let admin;
            try{
                admin = await AdminService.verifyUser(id);

                if(admin === null){
                    return res.status(401).json({message:"Invalid User"})
                }

                return res.json({user:{id:admin._id, username:admin.username}, isSuper:false, isAdmin: admin.isAdmin, isNurse:false, auth:true})

            } catch (err) {
                console.log(err);
                return res.status(500).json({message:"DB error"})
            }
        } else if (isnurse) {
            console.log("nurse part remaining")
        } else {
            console.log("nothing")
        }

        return res.json({username});
        
    }
}

export default AuthController;