import React from "react";
import { ButtonGray } from "../../../shared/components";
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
				<ButtonGray className="button-a-form-project" type="submit">
					enviar-mensaje
				</ButtonGray>
			</div>
		</FormContactameContainer>
	);
};

export default FormContactame;
