import React from "react";
import { useForm } from "react-hook-form";

const Background = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = handleSubmit((data) => {
		return console.log({ data });
	});

	return (
		<form>
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
			<button type="submit">Submit</button>
		</form>
	);
};

export default Background;
