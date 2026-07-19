import styled from "styled-components";
import { device } from "../shared/styles/Breakpoints";

export const ContainerExplorerAndContentTemplate = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: var(--max-width-explorer) 1fr;

  > * {
    outline: var(--outline);
  }

  @media ${device.tabletM} {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 100%;
  }
`;

export const WorkStationSectionTemplate = styled.section`
  padding: var(--padding-work-station);
  max-height: 100%;
  flex: 1;
  overflow-y: auto;
  line-height: var(--line-height-work-station);
  * {
    line-height: var(--line-height-work-station);
  }

  @media ${device.laptopS} {
    max-height: none;
    overflow-y: visible;
  }
`;

export const GridAutoFitTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.minmax}, 1fr)
  );
  grid-auto-rows: 1fr;
  justify-items: center;
  width: 100%;
  gap: 40px 25px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const ContainerCenterTemplate = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 6% 0;
`;

export const ContainerOneColumnGapTemplate = styled.div`
  display: grid;
  gap: ${(props) => props.gap || "20px"};
`;

export const ContentGridTemplate = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns || "1.3fr 1fr"};
  grid-auto-rows: auto;
  > section {
    outline: var(--outline);
  }

  /* Desktop flex layouts inside EditorPane */
  max-height: 100%;
  overflow: hidden;
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media ${device.laptopS} {
    grid-template-columns: 1fr;
    max-height: none;
    overflow: visible;
  }
`;

export const EditorPaneTemplate = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  @media ${device.tabletM} {
    height: 100%;
    overflow: visible;
  }
`;
