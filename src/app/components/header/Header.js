import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderContainer = styled.header`
	display: flex;
	.name-portfolio {
		max-width: var(--max-width-explorer);
		min-width: var(--min-width-explorer);
		width: 100%;
		outline: 1px solid var(--lines-color);
		display: flex;
		align-items: center;
		padding: 0 25px;
	}
	* {
		font-size: var(--size-lables);
		color: var(--secondary-color-gray);
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<div className="name-portfolio">ricardo-genaro</div>
			<Navbar />
		</HeaderContainer>
	);
};

export default Header;
