import AdminService from "../services/adminService.js";
import superUserService from "../services/superUserService.js";

class SuperUserController{
    static create = async (req, res)=>{
        const {name, username, password} = req.body;

        if(!name || !username || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        try{
            const superUserExist = await superUserService.checkUsername(username);
            if(superUserExist !== null){
                return res.status(400).json({message:"username already exist"});
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"DB error"})
        }

        // save user info in database 
        let superUser;
        try{
            superUser = await superUserService.createSuperUser({name, username, password});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"DB error"})
        }

        // send username in cookies to client
        res.cookie("id", superUser._id, {
            httpOnly: true
        })
        res.cookie("username", superUser.username, {
            httpOnly: true
        })
        res.cookie("issuper", superUser.isSuper, {
            httpOnly: true
        })

        // send user data to frontend with isSuper as true and auth true
        res.json({user: {id: superUser._id, username: superUser.username}, auth: true, isSuper: true, isAdmin:false, isNurse:false});

    }
    
    static loginUser = async (req, res)=>{
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({message:"All fields required"});
        }

        let userData;
        try{
            userData = await superUserService.findUser({username, password});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"DB error"})
        }

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
        return res.json({user:{id:userData._id, username:userData.username}, isSuper:true, isAdmin:false, isNurse:false, auth:true})

    }

    static logoutSuper = async (req, res) => {
        console.log("pendding")
    }

    static createAdmin = async (req, res)=>{
        const {name, username, password} = req.body;

        if(!name || !username || !password){
            return res.status(400).json({message:"All fields required"});
        }

        try{
            const adminExist = await AdminService.checkUsername(username);
            if(adminExist !== null){
                console.log(adminExist);
                return res.status(400).json({message:"username already exist"});
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"DB error"})
        }

        let admin;
        try{
            admin = await AdminService.createAdmin({name, username, password});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"DB error"})
        }

        return res.status(201).json({message:"admin created success"});
    }

    static removeAdmin = async (req, res) => {
        const {id} = req.body;
        if(!id) {
            return res.status(400).json({message:"Invalid request"});
        }

        let removed;
        try{
            removed = await AdminService.removeAdmin({id});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"DB error"})
        }

        if(removed.deletedCount === 0){
            return res.status(404).json({message:"admin not found not deleted"})
        }
        
        return res.json({message:"admin deleted success"})

    }

    static getAdmins = async (req, res)=>{
        let admins;
        try{
            admins = await AdminService.getAdmins();
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"DB error"})
        }

        if(admins.length === 0){
            return res.json({message:"no admins"});
        }

        return res.json(admins);

    }

}

export default SuperUserController;