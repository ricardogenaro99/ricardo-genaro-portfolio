import styled from "styled-components";
import { device } from "../../../shared/styles/Breakpoints";

export const SectionExplorerSobreMi = styled.div`
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

    &.section_explorer-tree {
      display: grid;
      gap: 5px;
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

  .item-list-span {
    cursor: pointer;
    a {
      color: var(--secondary-color-gray);
      text-decoration: none;
    }
    &:hover {
      color: var(--secondary-color-gray-hover-item);
      a {
        color: var(--secondary-color-gray-hover-item);
      }
    }
  }
`;

export const ContentSobreMi = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-auto-rows: auto;
  > section {
    outline: var(--outline);
  }

  @media ${device.laptopS} {
    grid-template-columns: 1fr;
  }
`;

export const ContainerItemSectionPage = styled.div`
  background: transparent;
  padding-left: 30px;
  padding-right: 20px;
  border-radius: var(--border-radius-card);
  outline: var(--outline);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: var(--transition);
  width: 97%;
  &.active-item-page {
    background: var(--primary-color-blue-active);
    outline-width: 2.7px;
  }

  .itemName {
    font-weight: 600;
    font-size: 1.05em;
  }
`;
