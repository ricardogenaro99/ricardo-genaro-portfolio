import {
	CAMPO_EMAIL,
	CAMPO_LETRAS_ESPACIOS,
	CAMPO_MAX_CARACTERES,
	CAMPO_REQUERIDO
} from "./Messages";

const regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regexEmail = /^(\w+[/./-]?){1,}@[A-Za-z]+[/.]\w{2,}$/;
const regexMensaje = /^.{1,255}$/;

const validarNombre = (value) => {
	value = value.trim();
	if (!value) {
		return CAMPO_REQUERIDO;
	} else if (!regexNombre.test(value)) {
		return CAMPO_LETRAS_ESPACIOS;
	}
	return null;
};

const validarEmail = (value) => {
	value = value.trim();
	if (!value) {
		return CAMPO_REQUERIDO;
	} else if (!regexEmail.test(value)) {
		return CAMPO_EMAIL;
	}
	return null;
};

const validarMensaje = (value) => {
	value = value.trim();
	if (!value) {
		return CAMPO_REQUERIDO;
	} else if (!regexMensaje.test(value)) {
		return CAMPO_MAX_CARACTERES("Mensaje", 255);
	}
	return null;
};

export const validationsForm = (form) => {
	const errors = {};

	if (!form.nombre) form.nombre = "";
	if (!form.email) form.email = "";
	if (!form.mensaje) form.mensaje = "";

	const nombre = validarNombre(form.nombre);
	const email = validarEmail(form.email);
	const mensaje = validarMensaje(form.mensaje);

	if (nombre) errors.nombre = nombre;
	if (email) errors.nombre = email;
	if (mensaje) errors.nombre = mensaje;

	return errors;
};

export const validateInputWhitName = (form, name) => {
	if (form[name] == null) {
		return;
	}

	switch (name) {
		case "nombre":
			return validarNombre(form.nombre);
		case "email":
			return validarEmail(form.email);
		case "mensaje":
			return validarMensaje(form.mensaje);
		default:
			return;
	}
};
