import React from "react";
import { useForm } from "react-hook-form";

const Recommendation = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = handleSubmit((data) => {
		return console.log({ data });
	});

	return (
		<form>
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
			<input type="text" {...register("Special order", { required: false })} />
			<label>Pending procedures</label>
			<input
				type="text"
				{...register("Pending procedures", { required: false })}
			/>
			<label>Other order</label>
			<input type="text" {...register("Other order", { required: false })} />

			<button type="submit">Submit</button>
		</form>
	);
};

export default Recommendation;
