import {
	RiAngularjsFill,
	RiCss3Fill,
	RiHtml5Fill,
	RiReactjsFill,
	RiVuejsFill
} from "react-icons/ri";
import { inProcessImage } from "../../../assets/proyectos";
import { ButtonGray } from "../../../shared/components";
import {
	CardModelStyle,
	ContainerCardProyecto
} from "../styles/StyledComponents";

const sizeIconTech = 30;

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

const CardModel = ({ linkImage, linkProject, description, alt, tags = [] }) => {
	return (
		<CardModelStyle>
			<div className="img-project-container">
				<span className="icons-tag">
					{tags.map((tag, i) => (
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
					src={linkImage || inProcessImage}
					alt={alt}
					loading="eager"
				/>
			</div>
			<section className="body-card">
				<p>{description}</p>
				<div>
					<a
						href={linkProject}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ButtonGray>ver-proyecto</ButtonGray>
					</a>
				</div>
			</section>
		</CardModelStyle>
	);
};

const CardProyecto = ({ maxWidth, project }) => {
	const { name, linkImage, linkProject, tags, description } = project;
	return (
		<ContainerCardProyecto maxWidth={maxWidth}>
			<h3 className="name-project">{name}</h3>
			<CardModel
				linkImage={linkImage}
				linkProject={linkProject}
				description={description}
				alt={name}
				tags={tags}
			/>
		</ContainerCardProyecto>
	);
};

export default CardProyecto;
