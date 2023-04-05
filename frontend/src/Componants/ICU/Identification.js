import React from "react";
import { useForm } from "react-hook-form";
import "./Styles.css";
import { useState } from "react";
import api from "../../http/index";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Identification = () => {
  let navigate= useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isOpen, setOpen] = useState(false);
  const [patientData, setPatientData] = useState({});

  const onSubmit = async (data) => {
    let res;
    try {
      res = await api.post(
        "http://localhost:5500/api/patient/identification",
        data
      );
      if (res.status === 200) {
        console.log(res.data);
        // setPatientData({id: res.data.})
      }
    } catch (error) {
      // console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  const onSubmitISBAR = async (ISBAR, data) => {
        console.log(data)
    let components = ["identification",
    "situation",
    "background",
    "assessment",
    "recommendation"]


    // let sendData = {id, mrNo, ISBAR}
    let sendData = {ISBAR}
    sendData[ISBAR] = data;
    console.log(sendData);
    let res;
    // try {
    //   res = await api.post("api/patient/update", sendData);
    //   if (res.status === 200) {
    //     console.log(res.data);
    //   }
    // } catch (error) {
    //   // console.log(error.response.data.message);
    //   alert(error.response.data.message);
    // }
  };

  return (
    <>
      <h1 style={{ fontFamily: "Bold",background:"pink" }}>IDENTIFICATION</h1>
      <form style={{ display: "flex", flexDirection: "column" }}>
        {/* register your input into the hook by invoking the "register" function */}

        {/* include validation with required or other standard HTML validation rules */}
        <label>*Mr.No</label>
        <input
          {...register("mrNo", {
            required: { value: true, message: "Required" },
            maxLength: { value: 10, message: "Max 10 characters allowed" },
          })}
        />
        {errors.mrNo && <p>{errors.mrNo.message}</p>}
        <label>*Name</label>
        <input type="text" {...register("name", { required: true })} />
        <label>*Department</label>
        <input type="text" {...register("department", { required: true })} />
        <label>Age</label>
        <input {...register("age")} />
        <h4>Gender</h4>
        <label htmlFor="field-male">
          <input
            {...register("gender")}
            type="radio"
            value="Male"
            id="field-male"
          />
          Male
        </label>
        <label htmlFor="field-female">
          <input
            {...register("gender")}
            type="radio"
            value="Female"
            id="field-female"
          />
          Female
        </label>
        <label htmlFor="field-other">
          <input
            {...register("gender")}
            type="radio"
            value="Other"
            id="field-other"
          />
          Other
        </label>
        <label>Ward</label>
        <select {...register("ward")}>
          <option value="None">none</option>
          <option value="Ward 1">Ward 1</option>
          <option value="Ward 2">Ward 2</option>
        </select>
        <label>BedNumber</label>
        <input type="number" {...register("bedNumber", { required: false })} />
        <label>IpdNumber</label>
        <input type="number" {...register("ipdNumber", { required: false })} />
        <label>DateOfAdmission</label>
        <input
          type="date"
          {...register("dateOfAdmission", { required: false })}
          min={new Date().toISOString().split("T")[0]}
        />

        {/* errors will return when field validation fails  */}
        <label>Category</label>
        <select {...register("category")}>
          <option value="None">none</option>
          <option value="WPaying">Paying</option>
          <option value="Mjpjy">Mjpjy</option>
          <option value="Other">Other</option>
        </select>
        <label>Dr.name</label>
        <input type="text" {...register("Dr.name", { required: false })} />
        <label>Unit</label>
        <input type="text" {...register("Unit", { required: false })} />
        <label>Diagnosis</label>
        <textarea type="text" {...register("Diagnosis", { required: false })} />
        <label>Chief Complaints</label>
        <textarea
          type="text"
          {...register("Chief Complaints", { required: false })}
        />
        <label>History of present illness</label>
        <textarea
          type="text"
          {...register("History of present illness", { required: false })}
        />
        <label>Allergy</label>
        <textarea type="text" {...register("Allergy", { required: false })} />

        {/* <Tabled/> */}

        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* //1 */}

        <h1>SITUTION</h1>

        <label>Oxygen Support</label>
        <select {...register("Oxygen Support",{ required: false })}>

          <option value="Room air" {...register("value")}>Room air</option>
          <option value="Nasal cannuala">Nasal cannuala</option>
          <option value="Oxygen mask">Oxygen mask</option>
          <option value="Venturi mask">Venturi mask</option>
          <option value="High-flow mask">High-flow mask</option>
          <option value="BPAP mask">BPAP mask</option>
          <option value="other">other</option>
        </select>

        <br></br>
        <input type="text" {...register("value", { required: false })} />

        <label>Ventilator Support</label>
        <select {...register("ventilator Support",{ required: false })}>
          <option value="None">None</option>
          <option value="PRVC"
          
          >PRVC</option>
          <option value="CPAP">CPAP</option>
          <option value="SIMV">SIMV</option>
          <option value="PS">PS</option>
          <option value="PC">PC</option>
          <option value="other">other</option>
        </select>
        <label>FIO2</label>
        <input type="text" {...register("FIO2", { required: false })} />
        <label>PEEP</label>
        <input type="text" {...register("PEEP", { required: false })} />
        <label>RR</label>
        <input type="text" {...register("RR", { required: false })} />
        <label>Tidal volume</label>
        <input type="text" {...register("Tidal volume", { required: false })} />

        <label>Continuos Infusion</label>
        <label>Inotrope</label>
        <label>Positive Inotrope</label>
        <select {...register("Positive Inotrope")}>
          <option value="None">None</option>
          <option value="PRVC">Dopmaine</option>
          <option value="CPAP">Dobutamine</option>
          <option value="SIMV">Adrenaline</option>
          <option value="PS">Atropine</option>
          <option value="other">Other</option>
        </select>
        <label>Negative Inotrope</label>
        <select {...register("Negative Inotrope")}>
          <option value="None">None</option>
          <option value="PRVC">Labetalol</option>
          <option value="CPAP">Nitroglycerin</option>
          <option value="SIMV">Sodium nitroprusside</option>
          <option value="PS">Amiosdarone</option>
          <option value="other">Other</option>
        </select>

        <label>Electrolytes correction</label>
        <select {...register("Electrolytes correction")}>
          <option value="None">None</option>
          <option value="PRVC">Sodium chloride 35</option>
          <option value="CPAP">Potassium chloride</option>
          <option value="other">Other</option>
        </select>

        <label>Immunglobin(IVIg)</label>
        <input type="text" {...register("Immunglobin", { required: false })} />
        <label>HAI</label>
        <input type="text" {...register("HAI", { required: false })} />
        <label>Fentanyl</label>
        <input type="text" {...register("Fentanyl", { required: false })} />
        <label>Atracurium</label>
        <input type="text" {...register("Atracurium", { required: false })} />
        <label>Midaozolam</label>
        <input type="text" {...register("Midaozolam", { required: false })} />
        <label>Sodium bicarbonate</label>
        <input
          type="text"
          {...register("Sodium bicarbonate", { required: false })}
        />
        <label>Other</label>
        <input type="text" {...register("Other", { required: false })} />

        <label>Nutritional Status</label>
        <label>Oral</label>
        <input type="text" {...register("Oral", { required: false })} />
        <label>Rt Feeding</label>
        <input type="text" {...register("Rt Feeding", { required: false })} />
        <label>NBM</label>
        <input type="text" {...register("NBM", { required: false })} />
        <label>Other</label>
        <input type="text" {...register("Other", { required: false })} />

        <label>Fluid restriction</label>
        <input
          type="text"
          {...register("Fluid restriction", { required: false })}
        />

        <button type="submit" >
          Submit
        </button>

        <br></br>
        <br></br>
        <br></br>
        <br></br>


        {/* 1.5 */}

        <h1>ASSESMENT</h1>

        <h2 style={{ color: "white" }}>Vital signs</h2>
        <br></br>
        <br></br>
        <h3 style={{ color: "white" }}>SITUTION</h3>
        <input type="text" {...register("Temperature", { required: false })} />
        <label>Pulse</label>
        <input type="text" {...register("Pulse", { required: false })} />
        <label>Respiration</label>
        <input type="text" {...register("Respiration", { required: false })} />
        <label>Blood pressure</label>
        <input
          type="text"
          {...register("Blood pressure", { required: false })}
        />

        <label>Other Parameters</label>
        <label>ETCO2</label>
        <input type="text" {...register("ETCO2", { required: false })} />
        <label>CVP</label>
        <input type="text" {...register("CVP", { required: false })} />
        <label>ABP</label>
        <input type="text" {...register("ABP", { required: false })} />

        <label>ECG</label>
        <select {...register("ECG")}>
          <option value="None">None</option>
          <option value="SR">SR</option>
          <option value="SB">SB</option>
          <option value="ST">ST</option>
        </select>

        <h1>Or</h1>

        <label>Arrhythmia</label>
        <select {...register("Arrhythmia")}>
          <option value="None">None</option>
          <option value="SVT">SR</option>
          <option value="AF">AF</option>
          <option value="Vtech">Vtech</option>
          <option value="VF">VF</option>
        </select>

        <label>Intake</label>
        <input type="text" {...register("Intake", { required: false })} />
        <label>Output</label>
        <input type="text" {...register("Output", { required: false })} />

        <h1>Investigations</h1>
        <label>Pathology</label>
        <label>Random blood sugar</label>
        <input
          type="text"
          {...register("Random blood sugar", { required: false })}
        />
        <label>Hemoglobin</label>
        <input type="text" {...register("Hemoglobin", { required: false })} />
        <label>WBC</label>
        <input type="text" {...register("WBC", { required: false })} />
        <label>RBC</label>
        <input type="text" {...register("RBC", { required: false })} />
        <label>Platelet count</label>
        <input
          type="text"
          {...register("Platelet count", { required: false })}
        />
        <label>Creatine</label>
        <input type="text" {...register("Creatine", { required: false })} />
        <label>Sodium Potassium</label>
        <input
          type="text"
          {...register("Sodium Potassium", { required: false })}
        />
        <label>Chloride</label>
        <input type="text" {...register("Chloride", { required: false })} />
        <label>ABG</label>
        <input type="text" {...register("ABG", { required: false })} />
        <label>HHH</label>
        <input type="text" {...register("HHH", { required: false })} />
        <label>LFT</label>
        <input type="text" {...register("LFT", { required: false })} />
        <label>Coagulation Profile</label>
        <input
          type="text"
          {...register("Coagulation Profile", { required: false })}
        />
        <label>Other</label>
        <input type="text" {...register("Other", { required: false })} />

        <h1>Radiology</h1>
        <label>X-Ray</label>
        <input type="text" {...register("X-Ray", { required: false })} />
        <label>Ct-scan</label>
        <input type="text" {...register("Ct-scan", { required: false })} />
        <label>MRI</label>
        <input type="text" {...register("MRI", { required: false })} />
        <label>Other</label>
        <input type="text" {...register("Other", { required: false })} />

        <button type="submit" >
          Submit
        </button>


        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* //2 */}

        <h1>BACKGROUND</h1>
        <label>Past medical history</label>
        <input
          type="text"
          {...register("Past medical history", { required: false })}
        />
        <label>Past surgical history</label>
        <input
          type="text"
          {...register("Past surgical history", { required: false })}
        />
        <label>Medication</label>
        <input type="text" {...register("Medication", { required: false })} />

        <h1>Blood products</h1>

        <label>whole blood</label>
        <input type="text" {...register("whole blood", { required: false })} />
        <label>pack red blood cells</label>
        <input
          type="text"
          {...register("pack red blood cells", { required: false })}
        />
        <label>fresh frozen plasma</label>
        <input
          type="text"
          {...register("fresh frozen plasma", { required: false })}
        />
        <label>single frozen plasma</label>
        <input
          type="text"
          {...register("single frozen plasma", { required: false })}
        />
        <label>cryoprecipitate antihemophilic factor</label>
        <input
          type="text"
          {...register("cryoprecipitate antihemophilic factor", {
            required: false,
          })}
        />
         <button type="submit" >
          Submit
        </button>


        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* 3 */}

        <h1>RECOMMENDATION</h1>
        <label>Pending medication</label>
        <input
          type="text"
          {...register("Pending medication", { required: false })}
        />
        <label>Pending reports</label>
        <input
          type="text"
          {...register("Pending reports", { required: false })}
        />
        <label>Refrences</label>
        <input type="text" {...register("Refrences", { required: false })} />
        <label>Special order</label>
        <input
          type="text"
          {...register("Special order", { required: false })}
        />
        <label>Pending procedures</label>
        <input
          type="text"
          {...register("Pending procedures", { required: false })}
        />
        <label>Other order</label>
        <input type="text" {...register("Other order", { required: false })} />

        <button type="submit" >
          Submit
        </button>
      </form>
      <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/mgmcet/icu")
   }}>
       Back
      </Button>
    </>
  );
};

export default Identification;
