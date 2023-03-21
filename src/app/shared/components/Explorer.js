import React from "react";
import styled from "styled-components";
import { device } from "../styles/Breakpoints";
import Accordion from "./accordion/Accordion";

const Container = styled.aside`
  width: 100%;
  position: relative;
  top: 0;
  > div {
    position: fixed;
    height: calc(100% - var(--height-footer));
    width: var(--max-width-explorer);
    > section > * {
      outline: var(--outline);
    }
  }

  font-size: var(--size-labels) !important;
  * {
    font-size: var(--size-labels) !important;
  }

  @media ${device.tabletM} {
    > div {
      position: relative;
      width: 100%;

      display: flex;
      flex-direction: column;
    }
  }
`;
const Explorer = ({ sections = [] }) => {
  return (
    <Container>
      <div>
        {sections.map((e, i) => (
          <Accordion key={i} title={e.title} content={e.content} />
        ))}
      </div>
    </Container>
  );
};

export default Explorer;
