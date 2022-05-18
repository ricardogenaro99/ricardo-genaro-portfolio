import React from "react";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import Accordion from "./accordion/Accordion";

const Container = styled.aside`
	width: 100%;
	position: relative;
	top: 0;
	> div {
		position: fixed;
		height: 100%;
		width: var(--max-width-explorer);
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
					<Accordion key={i} title={e.title} content={e.content} />
				))}
			</div>
		</Container>
	);
};

export default Explorer;
