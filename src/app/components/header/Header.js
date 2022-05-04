import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	.name-portfolio {
		width: var(--width-explorer);
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
			<div className="name-portfolio">
				<span>ricardo-genaro</span>
			</div>
			<Navbar />
		</HeaderContainer>
	);
};

export default Header;
