import React from "react";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import Acordion from "./accordion/Accordion";

const Container = styled.aside`
	width: 100%;
	> section > * {
		outline: 1px solid var(--lines-color);
	}

	@media ${device.tabletS} {
		opacity: 0;
	}
`;
const Explorer = ({ sections = [] }) => {

	return (
		<Container>
			{sections.map((e, i) => (
				<Acordion key={i} title={e.title} content={e.content}/>
			))}
		</Container>
	);
};

export default Explorer;
