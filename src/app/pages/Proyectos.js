import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  CardProyecto,
  ContainerProyectos,
  ItemCheckSpanDefault,
  SectionExplorerProyectos,
} from "app/components/proyectos";
import { Explorer, EditorTabBar } from "app/shared/components";
import { convertSizeCss } from "app/shared/utils/globalFuntions";
import {
  ContainerExplorerAndContentTemplate,
  GridAutoFitTemplate,
  WorkStationSectionTemplate,
  EditorPaneTemplate,
} from "app/templates/Templates";

import { ICONS_TECH, PROJECTS } from "app/shared/utils/globalConsts";

const Proyectos = () => {
  const [filters, setFilters] = useState(
    ICONS_TECH.filter((e) => e.visible === true).map((e) => ({ ...e, active: true }))
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
    const activeFilterNames = new Set(
      filters.filter((filter) => filter.active).map((filter) => filter.name)
    );

    if (activeFilterNames.size === 0) {
      setProjects(PROJECTS);
      return;
    }

    const projectsActive = PROJECTS.filter((project) =>
      project.tags.some((tag) => activeFilterNames.has(tag))
    );
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

  const proyectosTabs = [{ name: "proyectos.json", path: "/proyectos" }];
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <ContainerExplorerAndContentTemplate>
      <Explorer sections={SectionsExplorer} />
      <EditorPaneTemplate>
        <EditorTabBar tabs={proyectosTabs} />
        <WorkStationSectionTemplate ref={scrollRef}>
          <ContainerProyectos>
            <GridAutoFitTemplate minmax={convertSizeCss(maxWidth - 100)}>
              {projects.length === 0
                ? "No se encontraron proyectos"
                : projects.map((project) => (
                    <CardProyecto
                      key={project.id}
                      maxWidth={convertSizeCss(maxWidth)}
                      project={project}
                    />
                  ))}
            </GridAutoFitTemplate>
          </ContainerProyectos>
        </WorkStationSectionTemplate>
      </EditorPaneTemplate>
    </ContainerExplorerAndContentTemplate>
  );
};

export default Proyectos;
