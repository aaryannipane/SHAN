import PatientModel from "../models/patientModel.js";

class PatientService {
  static checkPatientExist = async (mrNo) => {
<<<<<<< HEAD
    const patient = await PatientModel.findOne({ mrNo: mrNo});
    return patient ? true : false;
  };

  static getAllPatientInDepartment = async (department) => {
    const patients = await PatientModel.find({
      "identification.ward": department,
    });
    return patients;
  };

  static getPatient = async (id, mrNo)=>{
    const patient = await PatientModel.findOne({$and: [{_id:id},
    {mrNo}]});
    return patient;
  }

=======
    const patient = await PatientModel.findOne({ mrNo: mrNo });
    return patient ? true : false;
  };

>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
  static createPatient = async (mrNo, rest) => {
    const patient = await PatientModel.create({
      mrNo,
      identification: rest,
    });
    return patient;
  };
<<<<<<< HEAD

  static addSituation = async (id, patientSituation) => {
    const patient = await PatientModel.findByIdAndUpdate(id, {
      situation: patientSituation,
    });

    return patient;
  };
=======
>>>>>>> f50bf3c7e131b575f87afd979fe8269b644c99b6
}

export default PatientService;
