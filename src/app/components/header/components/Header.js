import React from "react";
import { HeaderContainer } from "../styles/StyledComponents";
import Navbar from "./Navbar";

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
