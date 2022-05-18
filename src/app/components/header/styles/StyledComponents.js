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

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
	> section {
		display: flex;
		outline: var(--outline);
		> * {
			outline: var(--outline);
		}
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const NavLinkStyle = styled(NavLink)`
	height: 100%;
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
`;
