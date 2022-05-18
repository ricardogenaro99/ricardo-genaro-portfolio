import React from "react";
import NavLinkComponent from "./NavLinkComponent";
import { Nav } from "../styles/StyledComponents";

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
