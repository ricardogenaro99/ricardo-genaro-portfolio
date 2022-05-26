import React from "react";
import { NavLinkStyle } from "../styles/StyledComponents";

const NavLinkComponent = ({ path = "/", name, clickItemMenu }) => {
	return (
		<NavLinkStyle
			className={(navData) => (navData.isActive ? "active" : "")}
			to={path}
			onClick={clickItemMenu}
		>
			{name}
		</NavLinkStyle>
	);
};

export default NavLinkComponent;
