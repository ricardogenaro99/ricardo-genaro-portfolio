import { pathNameLink } from "../pathNameLink";
import { getItems } from "../util";
import ModelContentSobreMi from "./ModelContentSobreMi";

const items = getItems(pathNameLink, "formación-experiencia");
const SobreMiFormacionExperiencia = ({ paramLink }) => {
  return <ModelContentSobreMi items={items} paramLink={paramLink} />;
};

export default SobreMiFormacionExperiencia;
