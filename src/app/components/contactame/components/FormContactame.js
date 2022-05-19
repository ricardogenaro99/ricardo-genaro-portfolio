import React from "react";
import { FormContactameContainer } from "../styles/StyledComponents";
import { LabelInput, LabelTextArea } from "./LabelTextAreaInput";

const FormContactame = ({ form, onChange, onSubmit, errors, onBlur }) => {
	return (
		<FormContactameContainer onSubmit={onSubmit} noValidate>
			<LabelInput
				name="nombre"
				form={form}
				onChange={onChange}
				onBlur={onBlur}
				errors={errors}
			/>
			<LabelInput
				type="email"
				name="email"
				form={form}
				onChange={onChange}
				onBlur={onBlur}
				errors={errors}
			/>
			<LabelTextArea
				name="mensaje"
				form={form}
				onChange={onChange}
				onBlur={onBlur}
				errors={errors}
				rows={5}
			/>
			<div>
				<button className="button-a-form-project" type="submit">
					enviar-mensaje
				</button>
			</div>
		</FormContactameContainer>
	);
};

export default FormContactame;
