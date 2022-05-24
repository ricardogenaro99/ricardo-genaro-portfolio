import React, { memo } from "react";
import { pathNameLink } from "../pathNameLink";
import { getItems } from "../util";
import ModelContentSobreMi from "./ModelContentSobreMi";

const items = getItems(pathNameLink, "aptitudes");

const SobreMiAptitudes = ({ paramLink }) => {
	return <ModelContentSobreMi items={items} paramLink={paramLink} />;
};

export default memo(SobreMiAptitudes);
