import mongoose from "mongoose";

// dept_name
const DepartmentSchema = new mongoose.Schema({
  name: { type: String },
  maxBeds: {
    type: Number,
    required: true,
  },
});

const DepartmentModel = mongoose.model(
  "Department",
  DepartmentSchema,
  "departments"
);

export default DepartmentModel;
