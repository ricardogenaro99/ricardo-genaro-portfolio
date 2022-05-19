import React from "react";
import { LabelTextAreaInputContainer } from "../styles/StyledComponents";
import LabelErrorContainer from "./LabelErrorContainer";

export const LabelInput = ({
	name,
	type = "text",
	form,
	onChange,
	onBlur,
	errors,
}) => {
	const id = `input${name}`;

	return (
		<LabelTextAreaInputContainer>
			<LabelErrorContainer id={id} label={name} error={errors[name]} />
			<input
				name={name}
				id={id}
				type={type}
				value={form[name]}
				onChange={onChange}
				autoComplete="off"
			/>
		</LabelTextAreaInputContainer>
	);
};

export const LabelTextArea = ({
	name,
	form,
	onChange,
	onBlur,
	rows,
	errors,
}) => {
	const id = `textarea${name}`;
	return (
		<LabelTextAreaInputContainer>
			<LabelErrorContainer id={id} label={name} error={errors[name]} />
			<textarea
				name={name}
				id={id}
				value={form[name]}
				onChange={onChange}
				rows={rows}
				autoComplete="off"
			></textarea>
		</LabelTextAreaInputContainer>
	);
};
