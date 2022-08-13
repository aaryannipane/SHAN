import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name: {type:String, required:true},
    username: {type:String, required:true},
    password: {type:String, required:true},
}, {
    timestamps:true
});

const AdminModel = mongoose.model("Admin", AdminSchema, "admins");

export default AdminModel;