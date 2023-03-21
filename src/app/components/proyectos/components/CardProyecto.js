import { cloneElement, useMemo } from "react";
import { inProcessImage } from "../../../assets/proyectos";
import { ButtonGrayContainer } from "../../../shared/components";
import { ICONS_TECH } from "../../../shared/utils/globalConsts";
import {
  CardModelStyle,
  ContainerCardProyecto,
} from "../styles/StyledComponents";

const CardModel = ({ project }) => {
  const iconsMemo = useMemo(() => {
    return ICONS_TECH.reduce((acc, { name, bgColor, logo, propsStyleLogo }) => {
      acc[name] = {
        bgColor,
        logo: cloneElement(logo, propsStyleLogo),
      };
      return acc;
    }, {});
  }, []);

  return (
    <CardModelStyle>
      <div className="img-project-container">
        <span className="icons-tag">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`icon-tag`}
              style={{ background: iconsMemo[tag].bgColor }}
            >
              {iconsMemo[tag].logo}
            </span>
          ))}
        </span>
        <img
          className="img-project"
          src={project.linkImage || inProcessImage}
          alt={project.alt}
          loading="eager"
        />
      </div>
      <section className="body-card">
        <p>{project.description}</p>
        <div>
          {project.prod ? (
            <ButtonGrayContainer
              as="a"
              href={project.linkProject}
              target="_blank"
              rel="noopener noreferrer"
            >
              ver-proyecto
            </ButtonGrayContainer>
          ) : (
            <ButtonGrayContainer disabled={true} className="disabled">
              ver-proyecto
            </ButtonGrayContainer>
          )}
        </div>
      </section>
    </CardModelStyle>
  );
};

const CardProyecto = ({ maxWidth, project }) => {
  return (
    <ContainerCardProyecto maxWidth={maxWidth}>
      <h3 className="name-project">{project.name}</h3>
      <CardModel project={project} />
    </ContainerCardProyecto>
  );
};

export default CardProyecto;
