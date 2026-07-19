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
import { SiSpringboot } from "react-icons/si";

const iconMap = {
  react: RiReactjsFill,
  angular: RiAngularjsFill,
  html: RiHtml5Fill,
  css: RiCss3Fill,
  vue: RiVuejsFill,
  aws: RiAmazonFill,
  node: FaNodeJs,
  springBoot: SiSpringboot,
};

const TechIcon = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

export default TechIcon;
