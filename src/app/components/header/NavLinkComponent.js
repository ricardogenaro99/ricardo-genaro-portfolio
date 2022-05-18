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
	&:hover {
		background: var(--primary-color-blue-active);
	}
	&.active {
		border-bottom: 2px solid var(--accent-color-orange);
		background: var(--primary-color-blue-active);
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
