const mongoose = require("mongoose");

const PatientHistorySchema = new mongoose.Schema(
  {
    patient: {
      type: Object,
    },
  },
  { timestamps: true }
);

const PatientHistoryModel = mongoose.model(
  "PatientHistory",
  PatientHistorySchema
);
export default PatientHistoryModel;
