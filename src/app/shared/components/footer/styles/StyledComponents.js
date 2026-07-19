import styled from "styled-components";
import { device } from "../../../styles/Breakpoints";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background: var(--primary-color-blue);
  .container-fixed {
    height: var(--height-footer);
    width: 100%;
    display: flex;
    justify-content: space-between;
    outline: var(--outline);
    section {
      position: relative;
      display: grid;
      outline: var(--outline);
      &.social-footer {
        grid-template-columns: repeat(3, max-content);
        @media ${device.mobileL} {
          div {
            display: none;
          }
        }
      }
      &.github-footer {
        a {
          display: flex;
          gap: 7px;
          span {
            @media ${device.mobileL} {
              display: none;
            }
          }
        }
      }
      a {
        background: var(--primary-color-blue);
        text-decoration: none;
        color: var(--secondary-color-gray);
        transition: background-color 0.2s ease, color 0.2s ease;
        outline: none;
        &:hover {
          background: var(--primary-color-blue-active);
          color: var(--secondary-color-white);
        }
        &:focus-visible {
          outline: 2px inset var(--accent-color-orange);
        }
      }
      > * {
        padding: 0 15px;
        outline: var(--outline);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    font-size: var(--size-labels);
    * {
      font-size: var(--size-labels);
    }
    @media ${device.mobileL} {
      justify-content: center;
      section,
      a {
        outline: none;
      }
    }
  }
`;
