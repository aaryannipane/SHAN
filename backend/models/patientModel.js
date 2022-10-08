import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  details: {
    // ipd is patient uid from hospital
    ipd: { type: Number },
    name: { type: String },
    dob: { type: Date },
    sex: { type: String },
  },
  current_status: {
    // dept is also ward
    dept_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    bed_id: { type: mongoose.Schema.Types.ObjectId, ref: "Bed" },
    date_of_admission: { type: Date, default: Date.now },
    // doctar_name / consultant
    consultant: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    // big textbox
    provisional_dignosis: { type: String },
    cheif_complaints: { type: String },
    temprature: { type: mongoose.Decimal128 },
    pulse: { type: Number },
    respiration: { type: Number },
    sys_blood_pressure: { type: Number },
    dia_blood_pressure: { type: Number },
    spo2: { type: mongoose.Decimal128 },

    // oxygen support
    room_air: { type: mongoose.Decimal128 },
    nasal_prongs: { type: mongoose.Decimal128 },
    oxygen_mask: { type: mongoose.Decimal128 },
    ventury_mask: { type: mongoose.Decimal128 },
    high_flow_mask: { type: mongoose.Decimal128 },
    high_flow_nasal_cannula: { type: mongoose.Decimal128 },
    bpap_mask: { type: mongoose.Decimal128 },
    ventilator_mode: { type: String },

    // invasive line
    central_line: { type: String },
    arterial_line: { type: String },
    hd_catheter: { type: String },
    endotracheal_tube: { type: String },
    tracheostomy_tube: { type: String },

    // pending enum values
    vein_flow: { type: Number },
    nasogastric_tube: { type: Number },
    foleys_catheter: { type: Number },

    // drains
    intercostal_drain: { type: String },
    abdominal_drain_kit: { type: String },

    // emergency medication
    emergency_medication: { type: String },

    // oral medication
    oral_medication: { type: String },

    // rt medication
    rt_medication: { type: String },

    // blood products transfusion
    whole_blood: { type: String },
    pack_red_blood_cell: { type: String },
    fresh_frozen_plasma: { type: String },
    single_donor_platelet: { type: String },
    cryoprecipitated_antihemophilic_factor: { type: String },

    // infusion pump
    iv_fluids: { type: String },
    albumin: { type: String },

    // iv fluids

    // bed sore
    bed_sore: { type: String },

    // positioning
    positioning: { type: String },

    // in out
    intake: { type: String },
    output: { type: String },

    random_blood_sugar: { type: String },

    // investigation  (ARRAY OF STRINGS)
    routine_investigation: [{ type: String }],
    recommended_investigation: [{ type: String }],
    cultures_report: [{ type: String }],
    pending_investigation: [{ type: String }],

    // scales
    gcs: {type:mongoose.Decimal128},
    pain_scale: {type:mongoose.Decimal128},
    braden_scale: {type:mongoose.Decimal128},
    fall_risk_assessment: {type:mongoose.Decimal128},
    visual_inflammation_phlebitis_score: {type:mongoose.Decimal128},

    // nursing care plan
    // trans_out: {type: String},
    // todo

    // file
    dama: {type: String},
    discharge: {type: String},
    death: {type: String},

    // special considiration
    special_considiration: {type: String},

    // handover
    // taken_sign: {type: String},
    // given_sign: {type: String},


  },
  history: { type: Array },
});
