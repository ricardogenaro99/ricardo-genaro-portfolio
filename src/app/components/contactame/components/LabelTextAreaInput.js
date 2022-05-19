import React from "react";
import { LabelTextAreaInputContainer } from "../styles/StyledComponents";

export const LabelInput = ({ name, type = "text", value, onChange }) => {
	const id = `input${name}`;
	const textLabel = `_${name}:`;

	return (
		<LabelTextAreaInputContainer>
			<label htmlFor={id}>{textLabel}</label>
			<input
				name={name}
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				autoComplete="off"
			/>
		</LabelTextAreaInputContainer>
	);
};

export const LabelTextArea = ({ name, value, onChange, rows }) => {
	const id = `textarea${name}`;
	const textLabel = `_${name}:`;

	return (
		<LabelTextAreaInputContainer>
			<label htmlFor={id}>{textLabel}</label>
			<textarea
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				rows={rows}
				autoComplete="off"
			></textarea>
		</LabelTextAreaInputContainer>
	);
};
