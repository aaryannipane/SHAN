import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    doctor_no: {type: Number},
    name: {type: String},
    dob: {type: Date},
    sex: {type: String},
})