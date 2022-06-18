import { useState } from "react";
import { RiAngularjsFill, RiReactjsFill, RiVuejsFill } from "react-icons/ri";
import { v4 as uuid } from "uuid";
import {
	CardProyecto,
	ContainerProyectos,
	ContentProyectos,
	ItemCheckSpanDefault,
	SectionExplorerProyectos
} from "../components/proyectos";
import { Explorer } from "../shared/components";
import { convertSizeCss } from "../shared/utils/Funtions";
import {
	ContainerExplorerAndContentTemplate,
	GridAutoFitTemplate,
	WorkStationSectionTemplate
} from "../templates/Templates";

import { quenaImage, todoImage } from "../assets/proyectos/";

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
		name: "vue",
		label: "Vue",
		active: true,
		logo: <RiVuejsFill />,
	},
];

const initialProjects = [
	{
		id: uuid(),
		name: "_quena",
		linkProject: "https://www.instagram.com/ricardogenaro99/",
		linkImage: quenaImage,
		tags: ["angular"],
		description: "Aplicación Angular consumiendo servicios de AWS",
	},
	{
		id: uuid(),
		name: "_workfast",
		linkProject: "https://www.instagram.com/ricardogenaro99/",
		linkImage:
			"https://payload.cargocollective.com/1/6/198372/13590127/Captura-de-pantalla-2018-07-21-a-las-22.51.13_670.png",
		tags: ["react"],
		description: "Aplicación MERN Stack con arquitectura API-REST",
	},
	{
		id: uuid(),
		name: "_todo",
		linkProject: "https://todo-frontendmentor-challenge.herokuapp.com/",
		linkImage: todoImage,
		tags: ["react"],
		description: "Lista de tareas usando LocalStorage",
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
		reloadProjects();
	};

	const reloadProjects = () => {
		const filtersActive = filters.filter((filter) => filter.active);
		const projectsActive = initialProjects.filter((project) => {
			let count = 0;
			for (let index = 0; index < filtersActive.length; index++) {
				if (project.tags.includes(filtersActive[index].name)) {
					count++;
				}
			}
			return count > 0;
		});
		setProjects(projectsActive);
	};

	const SectionsExplorer = [
		{
			title: "proyectos",
			content: (
				<SectionExplorerProyectos>
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
				</SectionExplorerProyectos>
			),
		},
	];

	return (
		<ContainerExplorerAndContentTemplate>
			<Explorer sections={SectionsExplorer} />
			<ContentProyectos>
				<WorkStationSectionTemplate>
					<ContainerProyectos>
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
									description={project.description}
									tags={project.tags}
								/>
							))}
						</GridAutoFitTemplate>
					</ContainerProyectos>
				</WorkStationSectionTemplate>
			</ContentProyectos>
		</ContainerExplorerAndContentTemplate>
	);
};

export default Proyectos;
