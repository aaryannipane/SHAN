import mongoose from "mongoose";

// TODO: add values in background component
const PatientSchema = new mongoose.Schema(
  {
    mrNo: { type: Number, unique: true, required: true },
    identification: {
      name: { type: String, required: true },
      age: { type: Number },
      sex: { type: String },
      ward: { type: String },
      bedNo: { type: Number },
      ipdNo: { type: Number },
      dateOfAdmission: { type: Date },
      patientCategory: { type: String },
      drName: { type: String },
      unit: { type: Number },
      diagnosis: { type: String },
      chiefComplaints: { type: String },
      historyOfPresentIllness: { type: String },
      allergy: { type: String },
    },
    situation: {
      oxygenSupport: {
        os: {
          type: String,
          enum: [
            "roomAir",
            "nasalCannula",
            "oxygenMask",
            "venturiMask",
            "highFlowMask",
            "highFlowNasalCannula",
            "bpapMask",
            "Other",
          ],
        },
        value: { type: String },
      },
      ventilatorSupport: {
        vs: {
          type: String,
          enum: ["prvc", "cpap", "simv", "ps", "pc", "other"],
        },
        fiO2: { type: Number },
        peep: { type: Number },
        rr: { type: Number },
        tidalVolume: { type: Number },
        other: { type: String },
      },
      continuousInfusion: {
        inotrope: {
          positive: {
            type: String,
            enum: [
              "noradrenaline",
              "dopamine",
              "dobutamine",
              "adrenaline",
              "atropine",
              "other",
            ],
          },
          pOther: { type: String },
          negative: {
            type: String,
            enum: [
              "labetalol",
              "nitroglycerin",
              "sodiumNitroprusside",
              "amiodarone",
              "other",
            ],
          },
          nOther: { type: String },
        },
        electrolytesCorrection: {
          type: String,
        },
        IVIg: {
          type: String,
        },
        HAI: {
          type: String,
        },
        fentanyl: {
          type: String,
        },
        atracurium: {
          type: String,
        },
        midazolam: {
          type: String,
        },
        sodiumBicarbonate: {
          type: String,
        },
        other: {
          type: String,
        },
      },
      nutritionalStatus: {
        oral: { type: String },
        rtFeeding: { type: String },
        nbm: { type: String },
        other: { type: String },
        fluidRestriction: { type: String },
      },
    },
    background: {
      pastMedicalHistory: {
        type: String,
      },
      pastSurgicalHistory: { type: String },
      medication: { type: String },
      bloodProducts: {
        wholeBlood: { type: Number, default: 0 },
        packRedBloodCell: { type: Number, default: 0 },
        freshFrozenPlasma: { type: Number, default: 0 },
        singleDonorPlateletes: { type: Number, default: 0 },
        cryoprecipitateAntihemophilicFactor: { type: Number, default: 0 },
      },
      // TODO: add values
      skinImpairment: {
        bedSore: {
          stage: { type: String, enum: ["present", "absent"] },
          oozing: { type: String, enum: ["done", "notDone"] },
          positioning: { type: String, enum: [] },
        },
        wound: {
          stage: { type: String, enum: ["present", "absent"] },
          oozing: { type: String, enum: ["done", "notDone"] },
          positioning: { type: String, enum: [] },
        },
        burn: {
          stage: { type: String, enum: ["present", "absent"] },
          oozing: { type: String, enum: ["done", "notDone"] },
          positioning: { type: String, enum: [] },
        },
      },
      totalHemodialysis: {
        type: Number,
      },
    },
    assessment: {
      vitalSigns: {
        temperature: { type: Number },
        pulse: { type: Number },
        respiration: { type: Number },
        // TODO: add bp two parameters correct
        bloodPressure: { up: { type: Number }, down: { type: Number } },
        spo2: {
          type: Number,
        },
        otherParameters: {
          etco2: { type: String },
          cvp: { type: String },
          abp: { type: String },
        },
        ecg: {
          type: String,
          enum: ["sr", "sb", "st"],
        },
        arrhythmia: {
          type: String,
          enum: ["svt", "af", "af1", "vTach", "vf"],
        },
        // TODO: what to choose better for update and read
        invasiveLines: {
          veinFlow: {
            doi: { type: String },
            size: { type: String },
            site: { type: String },
            dod: { type: String },
            dor: { type: String },
          },
          centralLine: [{ type: String }],
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const PatientModel = mongoose.model("Patient", PatientSchema);
export const PatientHistoryModel = mongoose.model(
  "PatientHistory",
  PatientSchema
);

export default PatientModel;
