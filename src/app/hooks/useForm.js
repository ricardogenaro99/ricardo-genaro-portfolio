import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleBlur = (e) => {
		handleChange(e);
		const { name } = e.target;
		setErrors(validateForm(form, name));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateForm(form));
		setForm(form);

		if (Object.keys(validateForm(form)).length === 0) {
			console.log(1);
			alert("Formulario enviado");
			setLoading(true);

			helpHttp()
				.post(
					"https://formsubmit.co/ajax/genaro.choquehuanca.palli@gmail.com",
					{
						body: form,
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
					},
				)
				.then((res) => {
					setLoading(false);
					setResponse(true);
					setForm(initialForm);
					setTimeout(() => {
						setResponse(false);
					}, 3000);
					console.log(res);
				});
		} else {
			return;
		}
	};

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};
