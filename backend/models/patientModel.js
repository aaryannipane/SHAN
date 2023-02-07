import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    mrNo: { type: Number, unique: true, required: true },
    identification: {
      name: { type: String, required: true },
      age: { type: Number },
      sex: { type: String },
      ward: { type: String },
      bedNo: { type: Number },
      ipdNo: { type: Number },
      dateOfAdmission: { type: Date },
      patientCategory: { type: String },
      drName: { type: String },
      unit: { type: Number },
      diagnosis: { type: String },
      chiefComplaints: { type: String },
      historyOfPresentIllness: { type: String },
      allergy: { type: String },
    },
    situation: {
      oxygenSupport: {
        os: {
          type: String,
          enum: [
            "roomAir",
            "nasalCannula",
            "oxygenMask",
            "venturiMask",
            "highFlowMask",
            "highFlowNasalCannula",
            "bpapMask",
          ],
        },
        value: { type: String },
        other: { type: String },
      },
      ventilatorSupport: {
        vs: { type: String, enum: ["prvc", "cpap", "simv", "ps", "pc"] },
        fiO2: { type: Number },
        peep: { type: Number },
        rr: { type: Number },
        tidalVolume: { type: Number },
        other: { type: String },
      },
    },
  },
  {
    timestamps: true,
  }
);

const PatientModel = mongoose.model("Patient", PatientSchema);
export const PatientHistoryModel = mongoose.model(
  "PatientHistory",
  PatientSchema
);

export default PatientModel;
