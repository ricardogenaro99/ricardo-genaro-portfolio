import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Contactame from "../pages/Contactame";
import Hola from "../pages/Hola";
import Proyectos from "../pages/Proyectos";
import SobreMi from "../pages/SobreMi";

const MainContainer = styled.main`
	border: 1px solid var(--lines-color);
	display: flex;
`;
const Main = () => {
	return (
		<MainContainer>
			<Routes>
				<Route path="/">
					<Route index element={<Hola/>} />
					<Route path="/sobre-mi" element={<SobreMi />} />
					<Route path="/proyectos" element={<Proyectos />} />
					<Route path="/contactame" element={<Contactame />} />
				</Route>
				<Route path="*" element={<h1>Error 404 not found</h1>} />
			</Routes>
		</MainContainer>
	);
};

export default Main;
