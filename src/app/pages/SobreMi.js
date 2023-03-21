import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  sectionsExplorer,
  SobreMiAptitudes,
  SobreMiFormacionExperiencia,
  SobreMiIndex,
} from "../components/sobre-mi";
import { Enumeracion, Explorer } from "../shared/components";
import { removeAccents } from "../shared/utils/globalFuntions";
import {
  ContainerExplorerAndContentTemplate,
  WorkStationSectionTemplate,
} from "../templates/Templates";
import Error404 from "./Error404";

const SobreMi = () => {
  const [paramLink, setParamLink] = useState("");

  const changeParam = (name) => {
    setParamLink(removeAccents(name));
  };

  return (
    <ContainerExplorerAndContentTemplate>
      <Explorer sections={sectionsExplorer(changeParam)} />
      <WorkStationSectionTemplate>
        <Enumeracion>
          <Routes>
            <Route path="/">
              <Route index element={<SobreMiIndex />} />
              <Route
                path="/aptitudes"
                element={<SobreMiAptitudes paramLink={paramLink} />}
              />
              <Route
                path="/formacion-experiencia"
                element={<SobreMiFormacionExperiencia paramLink={paramLink} />}
              />
            </Route>
            <Route
              path="*"
              element={<Error404 message="Seleccione un archivo." />}
            />
          </Routes>
        </Enumeracion>
      </WorkStationSectionTemplate>
    </ContainerExplorerAndContentTemplate>
  );
};

export default SobreMi;
