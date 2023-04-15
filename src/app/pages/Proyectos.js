import { useState } from "react";
import {
  CardProyecto,
  ContainerProyectos,
  ContentProyectos,
  ItemCheckSpanDefault,
  SectionExplorerProyectos,
} from "../components/proyectos";
import { Explorer } from "../shared/components";
import { convertSizeCss } from "../shared/utils/globalFuntions";
import {
  ContainerExplorerAndContentTemplate,
  GridAutoFitTemplate,
  WorkStationSectionTemplate,
} from "../templates/Templates";

import { ICONS_TECH, PROJECTS } from "../shared/utils/globalConsts";

const Proyectos = () => {
  const [filters, setFilters] = useState(
    ICONS_TECH.filter((e) => e.visible === true)
  );
  const [projects, setProjects] = useState(PROJECTS);
  const maxWidth = 405;

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
    const projectsActive = PROJECTS.filter((project) => {
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
