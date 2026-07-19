import { useMemo, memo } from "react";
import { inProcessImage } from "app/assets/proyectos";
import { ButtonGrayContainer, ImageWithSkeleton, TechIcon } from "app/shared/components";
import { ICONS_TECH } from "app/shared/utils/globalConsts";
import {
  CardModelStyle,
  ContainerCardProyecto,
  TechOverlay,
} from "../styles/StyledComponents";

const CardModel = memo(({ project }) => {
  const iconsMemo = useMemo(() => {
    return ICONS_TECH.reduce((acc, { name, bgColor, logo, propsStyleLogo }) => {
      acc[name] = {
        bgColor,
        logo,
        propsStyleLogo,
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
              style={{ background: iconsMemo[tag]?.bgColor }}
            >
              <TechIcon name={iconsMemo[tag]?.logo} {...iconsMemo[tag]?.propsStyleLogo} />
            </span>
          ))}
        </span>
        <ImageWithSkeleton
          className="img-project"
          src={project.linkImage || inProcessImage}
          alt={project.alt}
          loading="eager"
          width={370}
          height={190}
        />
      </div>

      <TechOverlay>
        <div className="overlay-grid">
          <div className="overlay-section">
            <span className="overlay-title">{"// tecnologías"}</span>
            <div className="tech-list">
              {project.tags.map((tag, i) => (
                <div className="tech-item" key={i}>
                  <span
                    className="tech-logo-wrapper"
                    style={{
                      borderLeft: `2px solid ${
                        iconsMemo[tag]?.bgColor || "var(--secondary-color-purple)"
                      }`,
                    }}
                  >
                    <TechIcon name={iconsMemo[tag]?.logo} {...iconsMemo[tag]?.propsStyleLogo} />
                  </span>
                  <span>
                    {ICONS_TECH.find((icon) => icon.name === tag)?.label || tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {project.metadata ? (
            <div className="overlay-section">
              <span className="overlay-title">{"// detalles"}</span>
              <div className="metadata-list">
                {Object.entries(project.metadata).map(([key, val], i) => (
                  <div className="metadata-item" key={i}>
                    <span className="metadata-key">{key}</span>
                    <span className="metadata-val">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </TechOverlay>

      <section className="body-card">
        <p>{project.description}</p>
        <div className="container-buttons">
          {project.projects.map((e, i) => {
            const props = e.prod
              ? {
                  as: "a",
                  href: e.linkProject,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : { disabled: true, className: "disabled" };

            return (
              <ButtonGrayContainer key={i} {...props}>
                {e.alias || "ver-proyecto"}
              </ButtonGrayContainer>
            );
          })}
        </div>
      </section>
    </CardModelStyle>
  );
});

const CardProyecto = memo(({ maxWidth, project }) => {
  return (
    <ContainerCardProyecto maxWidth={maxWidth}>
      <h3 className="name-project">{project.name}</h3>
      <CardModel project={project} />
    </ContainerCardProyecto>
  );
});

export default CardProyecto;
