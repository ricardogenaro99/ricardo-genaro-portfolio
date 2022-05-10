import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Error404 = ({ message = "Error 404, página no encontrada" }) => {
	return (
		<Container>
			<h1>{message}</h1>
		</Container>
	);
};

export default Error404;
