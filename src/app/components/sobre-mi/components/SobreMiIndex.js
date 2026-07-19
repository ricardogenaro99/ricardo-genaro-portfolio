import styled from "styled-components";
import { ComentMultiple } from "app/shared/components";

const Container = styled.div`
  display: grid;
  gap: var(--line-height-work-station);
`;

const SobreMiIndex = () => {
  return (
    <ComentMultiple>
      <Container>
        <p>
          Soy un apasionado Líder Técnico y Backend Developer Specialist con más
          de 5 años de experiencia en el desarrollo de soluciones altamente
          escalables, robustas y de alta disponibilidad. Especializado en el
          diseño de arquitecturas de microservicios y plataformas resilientes
          para sectores de alta exigencia como Seguros y Banca/Fintech.
        </p>
        <p>
          Mi experiencia técnica se centra principalmente en el backend usando
          Node.js, TypeScript y Java (Spring Boot), con un profundo dominio del
          ecosistema AWS (CDK, EKS, Step Functions, EventBridge, Lambda, RDS,
          DynamoDB, SQS, Cognito, etc.). Además, cuento con conocimientos
          sólidos en la automatización de procesos de negocio empleando
          herramientas BPM (Camunda 7) y en la optimización de desarrollos
          mediante IA.
        </p>
        <p>
          A lo largo de mi trayectoria de más de 3 años coliderando y liderando
          equipos técnicos, me he enfocado en lograr un balance óptimo entre el
          time-to-market y la excelencia técnica. Defino estándares de calidad,
          estrategias de pruebas robustas (Unit, Integration, E2E) e implemento
          estrategias de resiliencia como Circuit Breakers y Fallbacks.
        </p>
        <p>
          Me destaco por mi capacidad analítica y crítica para prevenir
          escenarios de error, mi visión estratégica de negocio y mi liderazgo
          colaborativo en equipos multidisciplinarios bajo metodologías ágiles
          (Scrum).
        </p>
        <p>
          Estoy siempre en la búsqueda de oportunidades y retos complejos que me
          permitan diseñar soluciones de gran envergadura, optimizar procesos y
          guiar a equipos hacia el éxito técnico. Si deseas conversar sobre cómo
          puedo sumar valor a tu equipo, ¡no dudes en contactarme!
        </p>
      </Container>
    </ComentMultiple>
  );
};

export default SobreMiIndex;
