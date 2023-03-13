import PatientModel from "../models/patientModel.js";

class PatientService {
  static checkPatientExist = async (mrNo) => {
    const patient = await PatientModel.findOne({ mrNo: mrNo });
    return patient ? true : false;
  };

  static getAllPatientInDepartment = async (department) => {
    const patients = await PatientModel.find({
      "identification.ward": department,
    });
    return patients;
  };

  static createPatient = async (mrNo, rest) => {
    const patient = await PatientModel.create({
      mrNo,
      identification: rest,
    });
    return patient;
  };

  static addSituation = async (id, patientSituation) => {
    const patient = await PatientModel.findByIdAndUpdate(id, {
      situation: patientSituation,
    });

    return patient;
  };
}

export default PatientService;
