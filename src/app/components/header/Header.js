import React from "react";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import Navbar from "./Navbar";
const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: var(--max-width-explorer) 1fr;
	outline: 1px solid var(--lines-color);
	.name-portfolio {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 25px;
		outline: 1px solid var(--lines-color);
	}

	* {
		font-size: var(--size-lables);
		color: var(--secondary-color-gray);
	}

	@media ${device.tablet} {
		display: flex;
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
