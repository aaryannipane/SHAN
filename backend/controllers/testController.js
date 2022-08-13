import SuperUserModel from "../models/superUserModel.js"

class TestController{
    static test = async (req, res)=>{
        // finding user in database 
        const user = await SuperUserModel.findOne({username:"aryan"});

        if(!user){
            console.log("Invalid user")
        }

        console.log(user);
    }
}

export default TestController;