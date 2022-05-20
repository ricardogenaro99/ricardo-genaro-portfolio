import React from "react";
import { RiExternalLinkFill, RiMailFill, RiWhatsappFill } from "react-icons/ri";
import { FormContactame, MensajeEnviado } from "../components/contactame";
import ValuesContactame from "../components/contactame/components/ValuesContactame";
import { SectionExplorerSobreMi } from "../components/sobre-mi";
import { useForm } from "../hooks/useForm";
import { Explorer, Loader } from "../shared/components";
import { URL_MAIL, URL_WSP } from "../shared/utils/Urls";
import { validationsForm } from "../shared/validators/ValidationsForm";
import {
	ContainerCenterTemplate,
	ContainerExplorerAndContentTemplate,
	ContentGridTemplate,
	WorkStationSectionTemplate
} from "../templates/Templates";

const SectionsExplorer = [
	{
		title: "contactos",
		content: (
			<SectionExplorerSobreMi>
				<span className="section_explorer-flex item-list-span">
					<RiMailFill />
					<a href={URL_MAIL}>mandame_un_correo</a>
				</span>
				<span className="section_explorer-flex item-list-span">
					<RiWhatsappFill />
					<a href={URL_WSP} target="_blank" rel="noopener noreferrer">
						mandame_un_whatsapp
					</a>
				</span>
			</SectionExplorerSobreMi>
		),
	},
	{
		title: "tambien-encuentrame-en",
		content: (
			<SectionExplorerSobreMi>
				<span className="section_explorer-flex item-list-span">
					<RiExternalLinkFill />
					<a
						href="https://www.instagram.com/ricardogenaro99/"
						target="_blank"
						rel="noopener noreferrer"
					>
						instagram
					</a>
				</span>
				<span className="section_explorer-flex item-list-span">
					<RiExternalLinkFill />
					<a
						href="https://www.linkedin.com/in/ricardogenaro/"
						target="_blank"
						rel="noopener noreferrer"
					>
						linkedin
					</a>
				</span>
			</SectionExplorerSobreMi>
		),
	},
];

const initialForm = {
	nombre: "",
	email: "",
	mensaje: "",
};

const Contactame = () => {
	const {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleSubmit,
		resetForm,
	} = useForm(initialForm, validationsForm);

	return (
		<ContainerExplorerAndContentTemplate>
			<Explorer sections={SectionsExplorer} />
			<ContentGridTemplate gridTemplateColumns="1fr 1fr">
				<WorkStationSectionTemplate>
					<ContainerCenterTemplate>
						{!loading && !response && (
							<FormContactame
								onChange={handleChange}
								onSubmit={handleSubmit}
								form={form}
								errors={errors}
							/>
						)}
						{loading && <Loader />}
						{response && (
							<MensajeEnviado clickNuevoMensaje={resetForm} />
						)}
					</ContainerCenterTemplate>
				</WorkStationSectionTemplate>
				<WorkStationSectionTemplate>
					<ContainerCenterTemplate>
						<ValuesContactame form={form} />
					</ContainerCenterTemplate>
				</WorkStationSectionTemplate>
			</ContentGridTemplate>
		</ContainerExplorerAndContentTemplate>
	);
};

export default Contactame;
