import styled from "styled-components";
import { device } from "../../../shared/styles/Breakpoints";

export const HolaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 6em 3em;
  padding: var(--padding-global);
  @media ${device.laptopM} {
    padding: var(--padding-page-inicio);
  }

  .section-left {
    z-index: 1;
    display: grid;
    gap: 3.3em;
    div {
      display: grid;
      gap: 0.43em;

      &.section-left-intro {
        h1 {
          font-size: var(--size-headline);
          font-weight: 400;

          @media ${device.mobileS} {
            font-size: calc(var(--size-headline) - 10px);
          }
        }
        h2 {
          font-size: var(--size-subheadline);
          color: var(--secondary-color-purple);
          @media ${device.mobileS} {
            font-size: calc(var(--size-subheadline) - 5px);
          }
        }
        span,
        h2 {
          font-weight: 450;
        }
        span,
        h1 {
          color: var(--secondary-color-white);
        }
      }
    }
  }

  .section-right {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
      filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.8)) brightness(73%);
    }
  }
`;
