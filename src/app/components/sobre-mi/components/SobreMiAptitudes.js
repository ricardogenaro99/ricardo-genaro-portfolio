import { memo } from "react";
import { pathNameLink } from "../pathNameLink";
import { getItems } from "../util";
import ModelContentSobreMi from "./ModelContentSobreMi";

const items = getItems(pathNameLink, "aptitudes");

const SobreMiAptitudes = () => {
  return <ModelContentSobreMi items={items} />;
};

export default memo(SobreMiAptitudes);
