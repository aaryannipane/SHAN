import mongoose from "mongoose";
import PatientModel, { PatientHistoryModel } from "../models/patientModel.js";
import NurseService from "../services/nurseService.js";
import PatientService from "../services/patientService.js";

class NurseController {
  static loginNurse = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    let nurse;
    try {
      nurse = await NurseService.loginNurse(username, password);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "DB error" });
    }

    if (!nurse) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or Password" });
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
      success: true,
      user: {
        id: nurse.id,
        username: nurse.username,
      },
      auth: true,
    });
  };

  static logoutNurse = async (req, res) => {
    res.clearCookie("id");
    res.clearCookie("username");
    res.clearCookie("role");
    res.json({ success: true, message: "logout success", auth: false });
  };

  static getAllPatient = async (req, res) => {
    // currently only icu department is there if more than add to array
    const departments = ["icu"];
    const department = req.params.department;

    // check param is correct department
    // find that department patients and send all data
    if (!departments.includes(department)) {
      return res
        .status(404)
        .json({ success: false, message: "department not found" });
    }

    try {
      const data = await PatientService.getAllPatientInDepartment(department);
      // if (!data) {
      //   return res
      //     .status(404)
      //     .json({
      //       success: false,
      //       message: "patient not found in that department",
      //     });
      // }
      return res.json({ data });
    } catch (e) {
      return res.status("500").json({ message: "server DB error" });
    }

    return res.json({ message: "success" });
  };

  // add details of patient
  // adding patient Identification details
  static addPatientIdentification = async (req, res) => {
    const patient = req.body;
    if (!patient) {
      return res
        .status(400)
        .json({ success: false, message: "provide all patient fields" });
    }

    if (!patient.mrNo || !patient.name) {
      return res
        .status(400)
        .json({ success: false, message: "name and mrNo is required" });
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
    return res.status(200).json({
      success: true,
      message: "patient created success",
      patient: patientDb,
    });
  };

  // TODO: add patient situation
  static addPatientSituation = async (req, res) => {
    const patient = req.body;
    if (!patient) {
      return res
        .status(400)
        .json({ success: false, message: "provide all patient fields" });
    }

    if (!patient.mrNo || !patient.id) {
      return res
        .status(400)
        .json({ success: false, message: "mrNo and id is required" });
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

      // if no patient
      if (!isPatientExist) {
        return res.status(404).json({
          success: false,
          message: "patient does'nt exist",
        });
      }

      // if patient exist
      // TODO: update patient situation
      patientDb = await PatientModel.findByIdAndUpdate(id, {
        situation: patient,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "DB error" });
    }

    // success response
    return res
      .status(200)
      .json({ success: true, message: "patient situation added success" });
  };

  static removePatient = async (req, res) => {
    // check patient exist in db using mrno
    const patientData = req.body;
    try {
      const isPatientExist = await PatientService.checkPatientExist(
        patientData.mrNo
      );
      if (!isPatientExist) {
        return res
          .status(404)
          .json({ success: false, message: "patient not found" });
      }

      const patient = await PatientModel.findById(patientData.id);
      // push patient to history collectio
      let patientHistory = new PatientHistoryModel(patient);
      patientHistory._id = mongoose.Types.ObjectId();
      patientHistory.isNew = true;
      patientHistory.save();
      // delete patient from patient collection
      await PatientModel.findByIdAndDelete(patientData.id);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ success: false, message: "DB error" });
    }

    res.status(200).json({ success: true, message: "patient deleted success" });
  };

  // TESTING
  // static addPatientSituation2 = async (req, res) => {
  //   console.log(req.body);
  //   res.json({ success: true });
  // };
}

export default NurseController;
