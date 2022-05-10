import React from "react";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import Acordion from "./accordion/Accordion";

const Container = styled.aside`
	width: 100%;
	> div {
		> section > * {
			outline: var(--outline);
		}
		@media ${device.tabletS} {
			display: none;
		}
	}

	font-size: var(--size-labels) !important;
	* {
		font-size: var(--size-labels) !important;
	}
`;
const Explorer = ({ sections = [] }) => {
	return (
		<Container>
			<div>
				{sections.map((e, i) => (
					<Acordion key={i} title={e.title} content={e.content} />
				))}
			</div>
		</Container>
	);
};

export default Explorer;
