import BedModel from "../models/bedModel.js";
import DepartmentModel from "../models/departmentModel.js";

class DepartmentService {
  static getDepartments = async () => {
    const dept = await DepartmentModel.find();
    return dept;
  };

  static getDepartmentBeds = async (deptId) => {
    const beds = await BedModel.find({ department_id: deptId }).populate(
      "department_id"
    );
    return beds;
  };
}

export default DepartmentService;
