import styled from "styled-components";
import { device, size } from "app/shared/styles/Breakpoints";

const gapPadding = "20px";
const iconTagSize = "30px";

export const ContainerCardProyecto = styled.article`
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;

  .name-project {
    color: var(--secondary-color-purple);
    font-size: 1.1em;
  }
`;

export const CardModelStyle = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--border-radius-card);
  overflow: hidden;
  border: 1px solid var(--lines-color);
  background: var(--primary-color-blue-active);
  position: relative;
  transition: border-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(77, 91, 206, 0.45);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45),
      0 0 15px rgba(77, 91, 206, 0.12);
    transform: translateY(-4px);
  }

  .img-project-container {
    position: relative;

    .icons-tag {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      .icon-tag {
        border-radius: 4px;
        position: relative;
        width: ${iconTagSize};
        height: ${iconTagSize};
      }
    }
    .img-project {
      height: 190px;
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .body-card {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: ${gapPadding};
    padding: ${gapPadding} 0;
    > * {
      padding: 0 ${gapPadding};
    }
    > p {
      max-height: 169px;
      overflow-y: auto;
    }
    div {
      display: flex;
    }

    .container-buttons {
      gap: 10px;
      flex-wrap: wrap;
    }
  }

  width: 100%;
  height: 100%;
`;

export const SectionExplorerProyectos = styled.div`
  display: grid;
  gap: 10px;
  span {
    -ms-word-break: break-word;
    word-break: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    &.section_explorer-flex {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &.check-label-filter {
      .check-filter,
      .label-filter {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 5px;
      }
      &:hover {
        color: var(--secondary-color-gray-hover-item);
        .cbx {
          border-color: var(--secondary-color-gray-hover-item);
        }
      }
    }
  }

  ul {
    padding-left: 18px;
    display: grid;
    gap: 5px;

    li {
      display: flex;
      justify-content: flex-start;
    }
  }
`;

export const ContentProyectos = styled.div`
  display: grid;
  > section {
    outline: var(--outline);
  }

  @media ${device.laptopS} {
    grid-template-columns: 1fr;
  }
`;

export const ContainerProyectos = styled.div`
  max-width: ${device.laptopS};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: var(--padding-global);
  max-width: ${size.laptopL};
`;

export const TechOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 190px);
  background: rgba(1, 22, 39, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--lines-color);
  transform: translateY(101%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
  z-index: 10;
  overflow-y: auto;

  ${CardModelStyle}:hover & {
    transform: translateY(0);
  }

  .overlay-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;

    @media ${device.mobileL} {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .overlay-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .overlay-title {
    font-size: var(--size-code);
    color: var(--accent-color-orange);
    font-weight: bold;
    text-transform: lowercase;
  }

  .tech-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .tech-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: var(--size-labels);
    color: var(--secondary-color-white);
    opacity: 0;
    transform: translateY(8px);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;

    .tech-logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.06);

      svg {
        width: 18px !important;
        height: 18px !important;
        color: inherit !important;
      }
    }
  }

  .metadata-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .metadata-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: var(--size-labels);
    opacity: 0;
    transform: translateY(8px);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;

    .metadata-key {
      color: var(--secondary-color-gray);
      font-size: 0.78em;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    .metadata-val {
      color: var(--secondary-color-white);
      font-weight: 500;
    }
  }

  /* Stagger tech items on hover */
  ${CardModelStyle}:hover & .tech-item {
    opacity: 1;
    transform: translateY(0);
  }
  ${CardModelStyle}:hover & .tech-item:nth-child(1) {
    transition-delay: 0.05s;
  }
  ${CardModelStyle}:hover & .tech-item:nth-child(2) {
    transition-delay: 0.1s;
  }
  ${CardModelStyle}:hover & .tech-item:nth-child(3) {
    transition-delay: 0.15s;
  }
  ${CardModelStyle}:hover & .tech-item:nth-child(4) {
    transition-delay: 0.2s;
  }
  ${CardModelStyle}:hover & .tech-item:nth-child(5) {
    transition-delay: 0.25s;
  }

  /* Stagger metadata items on hover */
  ${CardModelStyle}:hover & .metadata-item {
    opacity: 1;
    transform: translateY(0);
  }
  ${CardModelStyle}:hover & .metadata-item:nth-child(1) {
    transition-delay: 0.08s;
  }
  ${CardModelStyle}:hover & .metadata-item:nth-child(2) {
    transition-delay: 0.14s;
  }
  ${CardModelStyle}:hover & .metadata-item:nth-child(3) {
    transition-delay: 0.2s;
  }
`;
