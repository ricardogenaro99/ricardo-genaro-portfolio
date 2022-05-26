import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../shared/styles/Breakpoints";

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

		@media ${device.tablet} {
			display: flex;
		}
	}
`;

export const sizeButtonMenu = "30px";

export const ButtonMenu = styled.button`
	display: none;

	@media ${device.tablet} {
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
	@media ${device.tablet} {
		flex-direction: column;
		justify-content: start;
		position: absolute;
		top: var(--height-header);
		height: calc(100vh - var(--height-header));
		transform: ${(props) =>
			props.watchMenu ? "translateX(0)" : "translateX(150vw)"};
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
	&:hover {
		background: var(--primary-color-blue-active);
	}
	&.active {
		border-bottom: 2px solid var(--accent-color-orange);
		background: var(--primary-color-blue-active);
		color: var(--secondary-color-white);
	}

	@media ${device.tablet} {
		width: 100vw;
		&.active {
			border-bottom: none;
			border-left: 2px solid var(--accent-color-orange);
			background: var(--primary-color-blue-active);
			color: var(--secondary-color-white);
		}
	}
`;
