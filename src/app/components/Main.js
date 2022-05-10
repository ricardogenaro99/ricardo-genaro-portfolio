import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Contactame from "../pages/Contactame";
import Error404 from "../pages/Error404";
import Hola from "../pages/Hola";
import Proyectos from "../pages/Proyectos";
import SobreMi from "../pages/SobreMi";

const MainContainer = styled.main`
	border-top: 1px solid var(--lines-color);
	border-bottom: 1px solid var(--lines-color);
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: var(--size-body);

	*{
		font-size: var(--size-body);
	}
`;
const Main = () => {
	return (
		<MainContainer>
			<Routes>
				<Route path="/">
					<Route index element={<Hola />} />
					<Route path="/sobre-mi/*" element={<SobreMi />} />
					<Route path="/proyectos" element={<Proyectos />} />
					<Route path="/contactame" element={<Contactame />} />
				</Route>
				<Route path="*" element={<Error404/>} />
			</Routes>
		</MainContainer>
	);
};

export default Main;
