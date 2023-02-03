import PatientModel from "../models/patientModel.js";

class PatientService {
  static checkPatientExist = async (mrNo) => {
    const patient = await PatientModel.findOne({ mrNo: mrNo });
    return patient ? true : false;
  };

  static createPatient = async (mrNo, rest) => {
    const patient = await PatientModel.create({
      mrNo,
      identification: rest,
    });
    return patient;
  };
}

export default PatientService;
