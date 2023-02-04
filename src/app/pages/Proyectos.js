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

import {
	inicipImage, quenaImage,
	todoImage,
	workfast
} from "../assets/proyectos/";

const initialFilters = [
	{
		id: uuid(),
		name: "react",
		label: "React",
		active: true,
		visible: true,
		logo: <RiReactjsFill />,
	},
	{
		id: uuid(),
		name: "angular",
		label: "Angular",
		active: true,
		visible: false,
		logo: <RiAngularjsFill />,
	},
	{
		id: uuid(),
		name: "vue",
		label: "Vue",
		active: true,
		visible: false,
		logo: <RiVuejsFill />,
	},
];

const initialProjects = [
	{
		id: uuid(),
		name: "_quena",
		linkProject: "https://quena.pe/",
		linkImage: quenaImage,
		tags: ["react"],
		description:
			"Aplicación Angular consumiendo servicios de AWS, la cual tiene como objetivo, el matching entre estrellas, fans y hosts",
		prod: true,
	},
	{
		id: uuid(),
		name: "_workfast",
		linkImage: workfast,
		linkProject: "https://workfast-landing.vercel.app/",
		tags: ["react"],
		description:
			"Aplicación MERN Stack con arquitectura API-REST, la cual tiene como objetivo la busqueda de empleos",
		prod: true,
	},
	{
		id: uuid(),
		name: "_todo-app",
		linkProject: "https://todo-app-challenge-ricardogenaro.vercel.app/",
		linkImage: todoImage,
		tags: ["react"],
		description: "Lista de tareas con almacenamiento en LocalStorage",
		prod: true,
	},
	{
		id: uuid(),
		name: "_inicip",
		linkProject: "https://inicip-escpograpnp.com/",
		linkImage: inicipImage,
		tags: ["react"],
		description: "El INICIP, forma parte de la Escuela de Posgrado de la PNP",
		prod: true,
	},
];

const Proyectos = () => {
	const [filters, setFilters] = useState(
		initialFilters.filter((e) => e.visible === true),
	);
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
			for (const element of filtersActive) {
				if (project.tags.includes(element.name)) {
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
						<GridAutoFitTemplate minmax={convertSizeCss(maxWidth - 100)}>
							{projects.map((project) => (
								<CardProyecto
									key={project.id}
									maxWidth={convertSizeCss(maxWidth)}
									project={project}
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
