import React from "react";
import styled from "styled-components";

const Container = styled.section`
	padding: var(--padding-work-station);
	/* max-height: calc(100vh - var(--height-header) - var(--height-footer) - 2px); */
	overflow-y: auto;
	line-height: var(--line-height-work-station);
	* {
		line-height: var(--line-height-work-station);
	}
`;

const WorkStationSection = ({ children }) => {
	return <Container>{children}</Container>;
};

export default WorkStationSection;
