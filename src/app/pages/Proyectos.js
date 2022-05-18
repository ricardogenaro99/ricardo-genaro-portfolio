import React, { useState } from "react";
import {
	RiAngularjsFill,
	RiCss3Fill,
	RiHtml5Fill,
	RiReactjsFill,
	RiVuejsFill,
} from "react-icons/ri";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import CardProyecto from "../components/proyectos/CardProyecto";
import Checked from "../shared/checked/Checked";
import Explorer from "../shared/Explorer";
import { convertSizeCss } from "../shared/Funtions";
import { device } from "../styles/Breakpoints";
import {
	ContainerExplorerAndContentTemplate,
	GridAutoFitTemplate,
	WorkStationSectionTemplate,
} from "../templates/Templates";

const SectionExplorer = styled.div`
	display: grid;
	gap: 10px;
	span {
		-ms-word-break: break-word;
		word-break: break-word;
		word-break: break-word;
		-ms-hyphens: auto;
		-moz-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		&.section_explorer-flex {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		&.check-label-filter {
			.check-filter,
			.label-filter {
				display: flex;
				align-items: center;
				cursor: pointer;
			}
			&:hover {
				color: var(--secondary-color-gray-hover-item);
				.cbx {
					border-color: var(--secondary-color-gray-hover-item);
				}
			}
		}
	}

	ul {
		padding-left: 18px;
		display: grid;
		gap: 5px;

		li {
			display: flex;
			justify-content: flex-start;
		}
	}
`;

const Content = styled.div`
	display: grid;
	> section {
		outline: var(--outline);
	}

	@media ${device.laptop} {
		grid-template-columns: 1fr;
	}
`;

const Container = styled.div`
	max-width: ${device.laptop};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	padding: var(--padding-global);
`;

const ItemCheckSpanDefault = ({ label, name, active, logo, setActive }) => {
	return (
		<span className="item-list-span">
			<span className="section_explorer-flex check-label-filter">
				<Checked name={name} active={active} setActive={setActive} />
				<label className="label-filter" htmlFor={name}>
					{logo}
					<span>{label}</span>
				</label>
			</span>
		</span>
	);
};

const initialFilters = [
	{
		id: uuid(),
		name: "react",
		label: "React",
		active: true,
		logo: <RiReactjsFill />,
	},
	{
		id: uuid(),
		name: "angular",
		label: "Angular",
		active: true,
		logo: <RiAngularjsFill />,
	},
	{
		id: uuid(),
		name: "html",
		label: "HTML",
		active: true,
		logo: <RiHtml5Fill />,
	},
	{
		id: uuid(),
		name: "css",
		label: "CSS",
		active: true,
		logo: <RiCss3Fill />,
	},
	{
		id: uuid(),
		name: "vue",
		label: "Vue",
		active: true,
		logo: <RiVuejsFill />,
	},
];

const initialProjects = [
	{
		id: uuid(),
		name: "proyecto1",
		linkProject: "https://www.youtube.com/watch?v=IkxtDjPSc-4",
		linkImage:
			"https://payload.cargocollective.com/1/6/198372/13590127/Captura-de-pantalla-2018-07-21-a-las-22.51.13_670.png",
		tag: ["react", "angular", "html", "css", "vue"],
	},
	{
		id: uuid(),
		name: "proyecto2",
		linkProject: "https://www.youtube.com/watch?v=IkxtDjPSc-4",
		linkImage:
			"https://payload.cargocollective.com/1/6/198372/13590127/Captura-de-pantalla-2018-07-21-a-las-22.51.13_670.png",
		tag: ["react", "angular", "html", "css", "vue"],
	},
	{
		id: uuid(),
		name: "proyecto1",
		linkProject: "https://www.youtube.com/watch?v=IkxtDjPSc-4",
		linkImage:
			"https://payload.cargocollective.com/1/6/198372/13590127/Captura-de-pantalla-2018-07-21-a-las-22.51.13_670.png",
		tag: ["react", "angular", "html", "css", "vue"],
	},
	{
		id: uuid(),
		name: "proyecto2",
		linkProject: "https://www.youtube.com/watch?v=IkxtDjPSc-4",
		linkImage:
			"https://payload.cargocollective.com/1/6/198372/13590127/Captura-de-pantalla-2018-07-21-a-las-22.51.13_670.png",
		tag: ["react", "angular", "html", "css", "vue"],
	},
];

const Proyectos = () => {
	const [filters, setFilters] = useState(initialFilters);
	const [projects, setProjects] = useState(initialProjects);
	const maxWidth = 400;

	const setFiltersParams = (data) => {
		const array = filters.map((element) => {
			if (element.id === data.id) {
				element.active = !element.active;
			}
			return element;
		});
		setFilters(array);
	};

	const SectionsExplorer = [
		{
			title: "proyectos",
			content: (
				<SectionExplorer>
					{filters.map((data) => (
						<span key={data.id} className="section_explorer-flex">
							<ItemCheckSpanDefault
								label={data.label}
								name={data.name}
								active={data.active}
								logo={data.logo}
								setActive={() => setFiltersParams(data)}
							/>
						</span>
					))}
				</SectionExplorer>
			),
		},
	];

	return (
		<ContainerExplorerAndContentTemplate>
			<Explorer sections={SectionsExplorer} />
			<Content>
				<WorkStationSectionTemplate>
					<Container>
						<GridAutoFitTemplate
							minmax={convertSizeCss(maxWidth - 100)}
						>
							{projects.map((project) => (
								<CardProyecto
									key={project.id}
									maxWidth={convertSizeCss(maxWidth)}
									name={project.name}
									srcImage={project.linkImage}
									linkProject={project.linkProject}
								/>
							))}
						</GridAutoFitTemplate>
					</Container>
				</WorkStationSectionTemplate>
			</Content>
		</ContainerExplorerAndContentTemplate>
	);
};

export default Proyectos;
