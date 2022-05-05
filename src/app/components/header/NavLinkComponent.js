import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkStyle = styled(NavLink)`
	height: 100%;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 25px;
	&.active {
		border-bottom: 2px solid var(--accent-color-orange);
		color: var(--secondary-color-white);
	}
`;

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
