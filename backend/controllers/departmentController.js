import DepartmentService from "../services/departmentService.js";

class DepartmentController {
  static getDepartments = async (req, res) => {
    const dept = await DepartmentService.getDepartments();
    res.status(200).json({ dept });
  };

  static getBeds = async (req, res) => {
    const { deptId } = req.body;

    if (!deptId) {
      return res.status(400).json({ message: "department id is required" });
    }

    const beds = await DepartmentService.getDepartmentBeds(deptId);

    res.status(200).json({ message: "success", beds });
  };
}

export default DepartmentController;
