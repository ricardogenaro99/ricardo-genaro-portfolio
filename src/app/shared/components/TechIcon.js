import React from "react";
import { FaNodeJs } from "react-icons/fa";
import {
  RiAmazonFill,
  RiAngularjsFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
  RiVuejsFill,
} from "react-icons/ri";
import { SiAstro, SiObsidian, SiSpringboot } from "react-icons/si";

export const AstroIcon = SiAstro;
export const ObsidianIcon = SiObsidian;

const iconMap = {
  react: RiReactjsFill,
  angular: RiAngularjsFill,
  html: RiHtml5Fill,
  css: RiCss3Fill,
  vue: RiVuejsFill,
  aws: RiAmazonFill,
  node: FaNodeJs,
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
