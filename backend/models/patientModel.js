import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  mrNo: { type: Number, unique: true, required: true },
  identification: {
    name: { type: String },
    age: { type: Number },
    sex: { type: String },
    ward: { type: String },
    bedNo: { type: Number },
    ipdNo: { type: Number },
    dateOfAdmission: { type: String },
    patientCategory: { type: String },
    drName: { type: String },
    unit: { type: Number },
    diagnosis: { type: String },
    chiefComplaints: { type: String },
    historyOfPresentIllness: { type: String },
    allergy: { type: String },
  },
});

const PatientModel = mongoose.model("Patient", PatientSchema);
export default PatientModel;
