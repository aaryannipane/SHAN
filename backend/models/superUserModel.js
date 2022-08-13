import mongoose from "mongoose";

const SuperUserSchema = new mongoose.Schema({
    name: {type:String, required: true},
    username: {type:String, required:true},
    password: {type:String, required: true},
}, {
    timestamps: true,
});

const SuperUserModel = mongoose.model('SuperUser',  SuperUserSchema, 'superusers');

export default SuperUserModel;