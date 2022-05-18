import React from "react";
import { NavLinkStyle } from "../styles/StyledComponents";

const NavLinkComponent = ({ path = "/", name }) => {
	return (
		<NavLinkStyle
			className={(navData) => (navData.isActive ? "active" : "")}
			to={path}
		>
			{name}
		</NavLinkStyle>
	);
};

export default NavLinkComponent;
