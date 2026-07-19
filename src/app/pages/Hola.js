import React from "react";
import avatar from "app/assets/avatar-profile.png";
import { CardAvatar } from "app/components/hola";
import { HolaContainer } from "app/components/hola/styles/StyledComponents";
import { Coment, ImageWithSkeleton } from "app/shared/components";
import { CodeStyleContainer } from "app/shared/styles/CodeStyle";
import {
  URL_GITHUB,
  URL_GITHUB_PORTFOLIO,
} from "app/shared/utils/globalConsts";

const Hola = () => {
  return (
    <HolaContainer>
      <div className="ambient-glow purple" />
      <div className="ambient-glow green" />
      <section className="section-left">
        <div className="section-left-intro">
          <span>Hola a todos, soy</span>
          <h1>Ricardo Genaro</h1>
          <h2> {">"} Tech Lead Backend Developer Specialist</h2>
        </div>
        <div className="section-left-code">
          <Coment>
            {"// piensa, relájate, inspírate y"} <b>{"<Codealo/>"}</b>
          </Coment>
          <Coment>{"// apóyate de mis proyectos en Github"}</Coment>
          <CodeStyleContainer>
            <span className="code-purple">const</span>
            <span className="code-green">githubLink</span>
            <span className="code-simb">{"="}</span>
            <span className="code-orange">URL</span>
            <span className="code-simb">{"=>"}</span>
            <a
              className="code-url code-cream"
              href={URL_GITHUB + URL_GITHUB_PORTFOLIO}
              target="_blank"
              rel="noopener noreferrer"
            >
              `{URL_GITHUB + "/"}
              <span className="code-simb">{"${"}</span>
              <span className="code-orange">URL</span>
              <span className="code-simb">{"}"}</span>`
            </a>
          </CodeStyleContainer>
        </div>
      </section>
      <section className="section-right">
        <CardAvatar>
          <ImageWithSkeleton src={avatar} alt="avatar-profile" loading="lazy" />
        </CardAvatar>
      </section>
    </HolaContainer>
  );
};

export default Hola;
