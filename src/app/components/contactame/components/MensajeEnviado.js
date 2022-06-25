import emoji from "../../../assets/hand-emoji.png";
import { ButtonGray } from "../../../shared/components";
import { MensajeEnviadoContainer } from "../styles/StyledComponents";
const MensajeEnviado = ({ clickNuevoMensaje }) => {
	return (
		<MensajeEnviadoContainer>
			<div>
				<span>Gracias! </span>
				<img src={emoji} alt="emoji-gracias" />
			</div>
			<p>
				Su mensaje ha sido aceptado. ¡Recibirás una respuesta muy
				pronto!
			</p>
			<ButtonGray onClick={clickNuevoMensaje}>
				enviar-nuevo-mensaje
			</ButtonGray>
		</MensajeEnviadoContainer>
	);
};

export default MensajeEnviado;
