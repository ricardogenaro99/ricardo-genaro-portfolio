import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contactame, Error404, Hola, Proyectos, SobreMi } from "../../../pages";
import { MainContainer } from "../styles/StyledComponents";

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
				<Route path="*" element={<Error404 />} />
			</Routes>
		</MainContainer>
	);
};

export default Main;
