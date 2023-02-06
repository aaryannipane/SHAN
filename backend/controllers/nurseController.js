import PatientModel from "../models/patientModel.js";
import NurseService from "../services/nurseService.js";
import PatientService from "../services/patientService.js";

class NurseController {
  static loginNurse = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let nurse;
    try {
      nurse = await NurseService.loginNurse(username, password);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (!nurse) {
      return res.status(401).json({ message: "Invalid username or Password" });
    }

    res.cookie("id", nurse.id, {
      httpOnly: true,
    });
    res.cookie("username", nurse.username, {
      httpOnly: true,
    });
    res.cookie("role", nurse.role, {
      httpOnly: true,
    });

    res.json({
      user: {
        id: nurse.id,
        username: nurse.username,
        name: nurse.name,
        role: nurse.role,
      },
      auth: true,
    });
  };

  static logoutNurse = async (req, res) => {
    res.clearCookie("id");
    res.clearCookie("username");
    res.clearCookie("role");
    res.json({ message: "logout success" });
  };

  // add details of patient
  static addPatient = async (req, res) => {
    const patient = req.body;
    if (!patient) {
      return res
        .status(400)
        .json({ success: false, message: "provide all patient fields" });
    }

    if (!patient.mrNo) {
      return res
        .status(400)
        .json({ success: false, message: "mrNo is required" });
    }

    const mrNo = Number(patient.mrNo);
    // check mrNo is number only
    if (isNaN(mrNo)) {
      return res
        .status(400)
        .json({ message: false, message: "mrNo should be a number" });
    }

    // check patient exist in db
    let patientDb;
    try {
      const isPatientExist = await PatientService.checkPatientExist(mrNo);

      if (isPatientExist) {
        return res.status(409).json({
          success: false,
          message: "patient already exist with same MR number",
        });
      }
      // creating new patient
      patientDb = await PatientService.createPatient(mrNo, patient);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "DB error" });
    }

    // success response
    return res
      .status(200)
      .json({ success: true, message: "patient created success" });
  };
}

export default NurseController;
