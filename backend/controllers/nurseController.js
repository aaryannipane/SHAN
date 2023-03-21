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

<<<<<<< HEAD
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

  // single patient by id and mrNo
  static getSinglePatient = async (req, res) => {
    const patientId = req.body.id;
    const patientMrNo = req.body.mrNo;

    if (!patientId || !patientMrNo) {
      return res
        .status(400)
        .json({ success: false, message: "please send patient id and mrNo" });
    }

    try {
      const patient = await PatientService.getPatient(patientId, patientMrNo);
      if (!patient) {
        return res
          .status(404)
          .json({ success: false, message: "patient not found" });
      }

      return res.status(200).json({ success: true, patient });
    } catch (e) {
      return res
        .status(500)
        .json({ success: false, message: "server DB error" });
    }
  };

  // add details of patient
  // creating patient and adding patient Identification details
  // TODO: check mrNo is present in history collection too (mrNo should be unique while deleting patient)
=======
  static getPatient = async (req, res) => {
    console.log(req.params);
    res.json({ message: "success" });
  };

  // add details of patient
  // adding patient Identification details
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
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
<<<<<<< HEAD
      const isPatientHistory = await PatientHistoryModel.findOne({ mrNo });

      if (isPatientExist || !isPatientHistory) {
=======

      if (isPatientExist) {
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
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

<<<<<<< HEAD
  // add patient situation
  static addPatientSituation = async (req, res) => {
    const patientSituation = req.body;
    if (!patientSituation) {
=======
  // TODO: add patient situation
  static addPatientSituation = async (req, res) => {
    const patient = req.body;
    if (!patient) {
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
      return res
        .status(400)
        .json({ success: false, message: "provide all patient fields" });
    }

<<<<<<< HEAD
    if (!patientSituation.mrNo || !patientSituation.id) {
=======
    if (!patient.mrNo || !patient.id) {
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
      return res
        .status(400)
        .json({ success: false, message: "mrNo and id is required" });
    }

<<<<<<< HEAD
    const mrNo = Number(patientSituation.mrNo);
=======
    const mrNo = Number(patient.mrNo);
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
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

<<<<<<< HEAD
      // if patient not exist
=======
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
      if (!isPatientExist) {
        return res.status(404).json({
          success: false,
          message: "patient does'nt exist",
        });
      }
<<<<<<< HEAD

      // if patient exist
      // TODO: update patient situation
      patientDb = await PatientService.addSituation(
        patientSituation.id,
        patientSituation
      );

      if (!patientDb) {
        return res.status(400).json({
          success: false,
          message: "send correct id and mrNo of Patient",
        });
      }
=======
      // TODO: update patient situation
      // patientDb = await PatientModel.findByIdAndUpdate(id, {
      //   situation: patient,
      // });
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: "DB error" });
    }

    // success response
    return res
      .status(200)
      .json({ success: true, message: "patient situation added success" });
  };

<<<<<<< HEAD
  // add patient background
  // update patient details (mrNo is not changed/updated)
  static updatePatient = async (req, res) => {
    const ISBAR = [
      "identification",
      "situation",
      "background",
      "assessment",
      "recommendation",
    ];

    // check right parameters we got
    const patient = req.body;

    if (!patient || !patient.id || !patient.mrNo || !patient.ISBAR) {
      return res
        .status(400)
        .json({ success: false, message: "patient's mrNo and id is required" });
    }

    // check parameter is correct matching with patients parameter
    if (!ISBAR.includes(patient.ISBAR)) {
      return res
        .status(400)
        .json({ success: false, message: "ISBAR component is not valid" });
    }

    if (patient.ISBAR === "identification" && !patient.identification.ward) {
      console.log(
        patient.ISBAR === "identification" && !patient.identification.ward
      );
      return res.status(400).json({
        success: false,
        message: "provide ward while updating identification",
      });
    }

    try {
      // check patient exist in DB or not
      // check id and mrNo is same as mentioned
      let patientOG = await PatientService.getPatient(patient.id, patient.mrNo);
      // console.log(patientOG);
      if (!patientOG) {
        return res.status(400).json({
          success: false,
          message: "patient does'nt exist. Please check id and mrNo is correct",
        });
      }

      // update patient data according to its parameter
      const patientDB = await PatientModel.findByIdAndUpdate(
        { _id: patient.id },
        {
          $set: patient,
        },
        { new: true }
      );

      if (!patientDB) {
        return res.status(400).json({
          success: false,
          message: "provide correct id and mrNo of patient",
        });
      }

      return res.status(200).json({ success: true, patientDB });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: "server DB error" });
    }

    return res.status(200).json({ success: true, message: "success" });
  };

=======
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
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
<<<<<<< HEAD
=======

  // TESTING
  // static addPatientSituation2 = async (req, res) => {
  //   console.log(req.body);
  //   res.json({ success: true });
  // };
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
}

export default NurseController;
