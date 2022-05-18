import React from "react";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import Navbar from "./Navbar";
const HeaderContainer = styled.div`
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

const Header = () => {
	return (
		<HeaderContainer>
			<div className="container-header">
				<div className="name-portfolio">ricardo-genaro</div>
				<Navbar />
			</div>
		</HeaderContainer>
	);
};

export default Header;
