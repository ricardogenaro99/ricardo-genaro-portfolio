import {
	CAMPO_EMAIL,
	CAMPO_LETRAS_ESPACIOS,
	CAMPO_MAX_CARACTERES,
	CAMPO_REQUERIDO
} from "./Messages";

export const validationsForm = (form) => {
	const errors = {};
	const regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	const regexMensaje = /^.{1,255}$/;

	if (!form.nombre.trim()) {
		errors.nombre = CAMPO_REQUERIDO;
	} else if (!regexNombre.test(form.nombre.trim())) {
		errors.nombre = CAMPO_LETRAS_ESPACIOS;
	}

	if (!form.email.trim()) {
		errors.email = CAMPO_REQUERIDO;
	} else if (!regexEmail.test(form.email.trim())) {
		errors.email = CAMPO_EMAIL;
	}

	if (!form.mensaje.trim()) {
		errors.mensaje = CAMPO_REQUERIDO;
	} else if (!regexMensaje.test(form.mensaje.trim())) {
		errors.mensaje = CAMPO_MAX_CARACTERES("Mensaje", 255);
	}
	return errors;
};
