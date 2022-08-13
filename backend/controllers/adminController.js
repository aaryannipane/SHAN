class AdminController{
    static loginAdmin = async (req, res) => {
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({message:"All fields required"});
        }

        // get user from database
        // set cookies
        // send json data to client
    }
}

export default AdminController;