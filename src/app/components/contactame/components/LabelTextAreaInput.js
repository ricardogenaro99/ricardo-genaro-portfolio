import React from "react";
import { validateInputWhitName } from "../../../shared/validators/ValidationsForm";
import { LabelTextAreaInputContainer } from "../styles/StyledComponents";
import LabelErrorContainer from "./LabelErrorContainer";

export const LabelInput = ({ name, type = "text", form, onChange }) => {
	const id = `input${name}`;
	const errorInput = validateInputWhitName(form, name);
	return (
		<LabelTextAreaInputContainer>
			<LabelErrorContainer id={id} label={name} error={errorInput} />
			<input
				name={name}
				id={id}
				type={type}
				value={form[name] || ""}
				onChange={onChange}
				autoComplete="off"
			/>
		</LabelTextAreaInputContainer>
	);
};

export const LabelTextArea = ({ name, form, onChange, rows }) => {
	const id = `textarea${name}`;
	const errorInput = validateInputWhitName(form, name);
	return (
		<LabelTextAreaInputContainer>
			<LabelErrorContainer id={id} label={name} error={errorInput} />
			<textarea
				name={name}
				id={id}
				value={form[name] || ""}
				onChange={onChange}
				rows={rows}
				autoComplete="off"
			></textarea>
		</LabelTextAreaInputContainer>
	);
};
