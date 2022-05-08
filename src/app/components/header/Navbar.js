import React from "react";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import NavLinkComponent from "./NavLinkComponent";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
	> section {
		display: flex;
		outline: 1px solid var(--lines-color);
		> * {
			outline: 1px solid var(--lines-color);
		}
	}
	@media ${device.tablet} {
		display: none;
	}
`;
const Navbar = () => {
	return (
		<Nav>
			<section>
				<NavLinkComponent name="_hola" />
				<NavLinkComponent path="/sobre-mi" name="_sobre_mi" />
				<NavLinkComponent path="/proyectos" name="_proyectos" />
			</section>
			<section>
				<NavLinkComponent path="/contactame" name="_contactame" />
			</section>
		</Nav>
	);
};

export default Navbar;
