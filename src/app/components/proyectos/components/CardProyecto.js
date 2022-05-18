import React, { useEffect } from "react";
import {
	RiAngularjsFill,
	RiCss3Fill,
	RiHtml5Fill,
	RiReactjsFill,
	RiVuejsFill
} from "react-icons/ri";
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

const CardModel = ({ srcImage, linkProject, alt, tags = [] }) => {

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
				<img className="img-project" src={srcImage} alt={alt} />
			</div>
			<section className="body-card">
				<p>Lorem ipsum dolor sit amet.</p>
				<div>
					<a
						href={linkProject}
						target="_blank"
						rel="noopener noreferrer"
					>
						ver-proyecto
					</a>
				</div>
			</section>
		</CardModelStyle>
	);
};

const CardProyecto = ({ name, srcImage, linkProject, maxWidth, tags }) => {
	return (
		<ContainerCardProyecto maxWidth={maxWidth}>
			<h3 className="name-project">{name}</h3>
			<CardModel
				srcImage={srcImage}
				linkProject={linkProject}
				alt={name}
				tags={tags}
			/>
		</ContainerCardProyecto>
	);
};

export default CardProyecto;
