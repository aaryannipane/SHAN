import superUserService from "../services/superUserService.js";

class AuthMiddleware{

    static superUserAuth = async (req, res, next)=>{
        try{
            const {id, username} = req.cookies;

            if(!id || !username){
                throw new Error();
            }

            const userData = await superUserService.verifyUser(id);

            if(!userData || userData.username !== username){
                throw new Error();
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