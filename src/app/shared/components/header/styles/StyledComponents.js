import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../styles/Breakpoints";

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background: var(--primary-color-blue);
  .container-header {
    height: var(--height-header);
    width: 100%;
    display: grid;
    grid-template-columns: var(--max-width-explorer) 1fr;
    outline: var(--outline);
    .name-portfolio {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 25px;
      outline: var(--outline);
    }

    * {
      font-size: var(--size-labels);
      color: var(--secondary-color-gray);
    }

    @media ${device.tabletM} {
      display: flex;
    }
  }
`;

export const sizeButtonMenu = "30px";

export const ButtonMenu = styled.button`
  display: none;

  @media ${device.tabletM} {
    background: transparent;
    width: ${sizeButtonMenu};
    height: ${sizeButtonMenu};
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      color: var(--secondary-color-gray);
    }
    &:hover {
      background: var(--primary-color-blue-active);
      * {
        color: var(--secondary-color-gray-hover-item);
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: var(--primary-color-blue);
  > section {
    display: flex;
    outline: var(--outline);
    > * {
      outline: var(--outline);
    }
  }
  @media ${device.tabletM} {
    flex-direction: column;
    justify-content: start;
    position: absolute;
    top: var(--height-header);
    height: calc(100vh - var(--height-header));
    transform: ${(props) =>
      props.watchMenu ? "translateX(0)" : "translateX(110vw)"};
    > section {
      display: grid;
      grid-auto-rows: var(--height-header);
      width: 100%;
    }
  }
`;

export const NavLinkStyle = styled(NavLink)`
  height: 100%;
  min-height: var(--height-header);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  position: relative;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: var(--primary-color-blue-active);
    color: var(--secondary-color-gray-hover-item);
  }

  &:focus-visible {
    outline: 2px inset var(--accent-color-orange);
  }

  &.active {
    border-bottom: 2px solid var(--accent-color-orange);
    box-shadow: inset 0 -2px 0 var(--accent-color-orange);
    background: var(--primary-color-blue-active);
    color: var(--secondary-color-white);
    text-shadow: 0 0 8px rgba(254, 165, 95, 0.2);
  }

  @media ${device.tabletM} {
    width: 100vw;
    &.active {
      border-bottom: none;
      border-left: 2px solid var(--accent-color-orange);
      box-shadow: inset 2px 0 0 var(--accent-color-orange);
      background: var(--primary-color-blue-active);
      color: var(--secondary-color-white);
      text-shadow: 0 0 8px rgba(254, 165, 95, 0.2);
    }
  }
`;
