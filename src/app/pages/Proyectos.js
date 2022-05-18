import React, { useEffect, useState } from "react";
import {
	RiAngularjsFill,
	RiCss3Fill,
	RiHtml5Fill,
	RiReactjsFill,
	RiVuejsFill,
} from "react-icons/ri";
import { v4 as uuid } from "uuid";
import {
	CardProyecto,
	ContainerProyectos,
	ContentProyectos,
	ItemCheckSpanDefault,
	SectionExplorerProyectos,
} from "../components/proyectos";
import { Explorer } from "../shared/components";
import { convertSizeCss } from "../shared/utils/Funtions";
import {
	ContainerExplorerAndContentTemplate,
	GridAutoFitTemplate,
	WorkStationSectionTemplate,
} from "../templates/Templates";

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
		tags: ["react", "html", "css"],
	},
	{
		id: uuid(),
		name: "proyecto2",
		linkProject: "https://www.youtube.com/watch?v=IkxtDjPSc-4",
		linkImage:
			"https://payload.cargocollective.com/1/6/198372/13590127/Captura-de-pantalla-2018-07-21-a-las-22.51.13_670.png",
		tags: ["angular", "html", "css"],
	},
	{
		id: uuid(),
		name: "proyecto1",
		linkProject: "https://www.youtube.com/watch?v=IkxtDjPSc-4",
		linkImage:
			"https://payload.cargocollective.com/1/6/198372/13590127/Captura-de-pantalla-2018-07-21-a-las-22.51.13_670.png",
		tags: ["css", "html"],
	},
	{
		id: uuid(),
		name: "proyecto2",
		linkProject: "https://www.youtube.com/watch?v=IkxtDjPSc-4",
		linkImage:
			"https://payload.cargocollective.com/1/6/198372/13590127/Captura-de-pantalla-2018-07-21-a-las-22.51.13_670.png",
		tags: ["vue", "html", "css"],
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

	useEffect(() => {
		const obj = {};
		filters.forEach((e) => {
			obj[e.name] = e.active;
		});

		// projects.map((e) => {
		// 	if (obj[e.tags]) {

		// 	}
		// });
	}, [filters]);

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
