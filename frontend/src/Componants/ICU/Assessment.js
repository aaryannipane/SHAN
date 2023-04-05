import React from "react";
import { useForm } from "react-hook-form";

const Assessment = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = handleSubmit((data) => {
		return console.log({ data });
	});

	return (
		<form>
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
			<input type="text" {...register("Blood pressure", { required: false })} />

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
			<input type="text" {...register("Platelet count", { required: false })} />
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

			<button type="submit">Submit</button>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</form>
	);
};

export default Assessment;
