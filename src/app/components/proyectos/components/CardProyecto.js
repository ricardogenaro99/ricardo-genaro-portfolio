import {
	RiAngularjsFill,
	RiCss3Fill,
	RiHtml5Fill,
	RiReactjsFill,
	RiVuejsFill,
} from "react-icons/ri";
import styled from "styled-components";
import { inProcessImage } from "../../../assets/proyectos";
import { ButtonGrayContainer } from "../../../shared/components";
import {
	CardModelStyle,
	ContainerCardProyecto,
} from "../styles/StyledComponents";

const sizeIconTech = 30;

const RefButtonGray = styled(ButtonGrayContainer).attrs({
	as: "a",
})``;

const iconsTech = {
	react: {
		bgColor: "#86E1F9",
		logo: <RiReactjsFill size={sizeIconTech} color="#000000" />,
	},
	angular: {
		bgColor: "#B9213A",
		logo: <RiAngularjsFill size={sizeIconTech} color="#EFE5E1" />,
	},
	html: {
		bgColor: "#E44D25",
		logo: <RiHtml5Fill size={sizeIconTech} color="#FFFFFF" />,
	},
	css: {
		bgColor: "#369AD6",
		logo: <RiCss3Fill size={sizeIconTech} color="#FFFFFF" />,
	},
	vue: {
		bgColor: "#00C180",
		logo: <RiVuejsFill size={sizeIconTech} color="#33475F" />,
	},
};

const CardModel = ({ project }) => {
	return (
		<CardModelStyle>
			<div className="img-project-container">
				<span className="icons-tag">
					{project.tags.map((tag, i) => (
						<span
							key={i}
							className={`icon-tag`}
							style={{ background: iconsTech[tag].bgColor }}
						>
							{iconsTech[tag].logo}
						</span>
					))}
				</span>
				<img
					className="img-project"
					src={project.linkImage || inProcessImage}
					alt={project.alt}
					loading="eager"
				/>
			</div>
			<section className="body-card">
				<p>{project.description}</p>
				<div>
					{project.prod ? (
						<RefButtonGray
							href={project.linkProject}
							target="_blank"
							rel="noopener noreferrer"
						>
							ver-proyecto
						</RefButtonGray>
					) : (
						<ButtonGrayContainer disabled={true} className="disabled">
							ver-proyecto
						</ButtonGrayContainer>
					)}
				</div>
			</section>
		</CardModelStyle>
	);
};

const CardProyecto = ({ maxWidth, project }) => {
	return (
		<ContainerCardProyecto maxWidth={maxWidth}>
			<h3 className="name-project">{project.name}</h3>
			<CardModel project={project} />
		</ContainerCardProyecto>
	);
};

export default CardProyecto;
