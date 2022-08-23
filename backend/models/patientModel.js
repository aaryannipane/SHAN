import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    details: {
        ipd: {type: Number},
        name: {type: String},
        dob: {type: Date},
        sex: {type: String},

    },
    current_status: {
        dept_id: {type: mongoose.Schema.Types.ObjectId, ref: "Department"},
        bed_no: {type: Number},
        date_of_admission: {type: Date, default: Date.now},
        consultant: {type: mongoose.Schema.Types.ObjectId, ref: "Doctor"},
        provisional_dignosis: {type: String},
        cheif_complaints: {type: String},
        temprature: {type:mongoose.Decimal128},
        pulse: {type: Number},
        respiration: {type: Number},
        blood_pressure: {type: Number},
        spo2: {type:mongoose.Decimal128},
        // rest of the shit
    },
    history: {type: Array},
    

})