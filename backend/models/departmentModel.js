import mongoose from "mongoose";

// dept_name
const DepartmentSchema = new mongoose.Schema({
  name: { type: String },
});

const DepartmentModel = mongoose.model(
  "Department",
  DepartmentSchema,
  "departments"
);

export default DepartmentModel;
