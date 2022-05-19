import React from "react";
import { FormContactameContainer } from "../styles/StyledComponents";
import { LabelInput, LabelTextArea } from "./LabelTextAreaInput";

const FormContactame = ({ value, onChange, onSubmit }) => {
	return (
		<FormContactameContainer onSubmit={onSubmit}>
			<LabelInput
				name="nombre"
				value={value.nombre}
				onChange={onChange}
			/>
			<LabelInput
				type="email"
				name="email"
				value={value.email}
				onChange={onChange}
			/>
			<LabelTextArea
				name="mensaje"
				value={value.mensaje}
				onChange={onChange}
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
