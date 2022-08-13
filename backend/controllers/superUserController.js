import superUserService from "../services/superUserService.js";

class SuperUserController{
    static create = async (req, res)=>{
        const {name, username, password} = req.body;

        if(!name || !username || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        // save user info in database 
        const superUser = await superUserService.createSuperUser({name, username, password});
        console.log(superUser)

        // send username in cookies to client
        res.cookie("id", superUser._id, {
            httpOnly: true
        })
        res.cookie("username", superUser.username, {
            httpOnly: true
        })

        // send user data to frontend with isSuper as true and auth true
        res.json({user: {id: superUser._id, username: superUser.username}, auth: true, isSuper: true});

    }
    
    static loginUser = async (req, res)=>{
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(401).json({message:"All fields required"});
        }

        const userData = await superUserService.findUser({username, password});

        console.log(userData)

        if(!userData){
            return res.status(401).json({message:"Invalid User"});
        }

        // send username in cookies to client
        res.cookie("id", userData.id, {
            httpOnly: true
        })
        res.cookie("username", userData.username, {
            httpOnly: true
        })

        // send req with msg 
        return res.json({user:{id:userData._id, username:userData.username}, isSuper:true, auth:true})

    }

    static createAdmin = async (req, res)=>{
        const {name, username, password} = req.body;
        console.log("create admin incomplete")
        res.json({message:"create admin incomplete"});
    }

}

export default SuperUserController;