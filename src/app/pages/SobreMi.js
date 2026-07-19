import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  sectionsExplorer,
  SobreMiAptitudes,
  SobreMiFormacionExperiencia,
  SobreMiIndex,
} from "app/components/sobre-mi";
import { Enumeracion, Explorer, EditorTabBar } from "app/shared/components";
import {
  ContainerExplorerAndContentTemplate,
  WorkStationSectionTemplate,
  EditorPaneTemplate,
} from "app/templates/Templates";
import Error404 from "./Error404";

const sobreMiTabs = [
  { name: "SobreMi.md", path: "/sobre-mi", hash: "#index" },
  { name: "experiencia_laboral.md", path: "/sobre-mi/formacion-experiencia", hash: "#experiencia_laboral" },
  { name: "formación_academica.md", path: "/sobre-mi/formacion-experiencia", hash: "#formacion_academica" },
  { name: "creativo.md", path: "/sobre-mi/aptitudes", hash: "#creativo" },
  { name: "analítico.md", path: "/sobre-mi/aptitudes", hash: "#analitico" },
];

const SobreMi = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <ContainerExplorerAndContentTemplate>
      <Explorer sections={sectionsExplorer()} />
      <EditorPaneTemplate>
        <EditorTabBar tabs={sobreMiTabs} />
        <WorkStationSectionTemplate ref={scrollRef}>
          <div style={{ maxWidth: "1100px", width: "100%" }}>
            <Enumeracion>
              <Routes>
                <Route path="/">
                  <Route index element={<SobreMiIndex />} />
                  <Route
                    path="/aptitudes"
                    element={<SobreMiAptitudes />}
                  />
                  <Route
                    path="/formacion-experiencia"
                    element={<SobreMiFormacionExperiencia />}
                  />
                </Route>
                <Route
                  path="*"
                  element={<Error404 message="Seleccione un archivo." />}
                />
              </Routes>
            </Enumeracion>
          </div>
        </WorkStationSectionTemplate>
      </EditorPaneTemplate>
    </ContainerExplorerAndContentTemplate>
  );
};

export default SobreMi;
