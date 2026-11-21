import React from "react";
import { FaAws } from "react-icons/fa";
import {
  SiAngular,
  SiAstro,
  SiCss,
  SiHtml5,
  SiNodedotjs,
  SiObsidian,
  SiReact,
  SiSpringboot,
  SiVuedotjs,
} from "react-icons/si";

export const AstroIcon = SiAstro;
export const ObsidianIcon = SiObsidian;

const iconMap = {
  react: SiReact,
  angular: SiAngular,
  html: SiHtml5,
  css: SiCss,
  vue: SiVuedotjs,
  aws: FaAws,
  node: SiNodedotjs,
  springBoot: SiSpringboot,
  astro: SiAstro,
  obsidian: SiObsidian,
};

const TechIcon = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

export default TechIcon;
