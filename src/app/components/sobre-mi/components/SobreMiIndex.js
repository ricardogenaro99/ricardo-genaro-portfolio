import styled from "styled-components";
import { ComentMultiple } from "../../../shared/components";

const Container = styled.div`
  display: grid;
  gap: var(--line-height-work-station);
`;

const SobreMiIndex = () => {
  return (
    <ComentMultiple>
      <Container>
        <p>
          Soy un apasionado desarrollador fullstack con una amplia experiencia
          en la creación de aplicaciones web de alto rendimiento y soluciones
          escalables. Mi experiencia se extiende desde el desarrollo front-end
          utilizando tecnologías como HTML, CSS, JavaScript, Angular y React
          hasta el back-end utilizando Node.js, Java y bases de datos SQL y
          NoSQL.
        </p>
        <p>
          Me apasiona trabajar en proyectos innovadores y desafiantes, y siempre
          estoy buscando formas de mejorar mis habilidades y aprender nuevas
          tecnologías. Me enorgullezco de mi capacidad para colaborar con
          equipos multidisciplinarios y crear soluciones eficaces que cumplan
          con los objetivos del negocio y las necesidades de los usuarios.
        </p>
        <p>
          Soy una persona apasionada, autodirigida y enfocada en resultados. Me
          gusta trabajar en entornos dinámicos y de ritmo acelerado, donde puedo
          aplicar mis habilidades y conocimientos para resolver problemas
          complejos y enfrentar nuevos desafíos.
        </p>
        <p>
          Además, tengo habilidades en la gestión de proyectos, el diseño de
          interfaces de usuario y la optimización del rendimiento, lo que me
          permite tomar decisiones bien informadas y proporcionar soluciones
          efectivas para mejorar la experiencia del usuario.
        </p>
        <p>
          Estoy interesado en oportunidades desafiantes en el campo del
          desarrollo web fullstack, donde pueda aplicar mis habilidades y
          conocimientos para crear soluciones innovadoras y efectivas para los
          clientes. Si desea discutir cómo podemos trabajar juntos, ¡no dude en
          ponerse en contacto conmigo!
        </p>
      </Container>
    </ComentMultiple>
  );
};

export default SobreMiIndex;
