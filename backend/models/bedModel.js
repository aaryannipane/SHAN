import mongoose from "mongoose";

// dept_id (ref), bed_no, patient_id (ref)
const BedSchema = new mongoose.Schema({
  bed_no: { type: String, required: true },
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    default: null,
  },
});

const BedModel = mongoose.model("Bed", BedSchema, "beds");

export default BedModel;
