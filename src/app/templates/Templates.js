import styled from "styled-components";
import { device } from "../styles/Breakpoints";

export const ContainerExplorerAndContentTemplate = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: var(--max-width-explorer) 1fr;
	> * {
		outline: var(--outline);
	}

	@media ${device.tabletS} {
		grid-template-columns: 50px 1fr;
	}
`;

export const WorkStationSectionTemplate = styled.section`
	padding: var(--padding-work-station);
	overflow-y: auto;
	line-height: var(--line-height-work-station);
	* {
		line-height: var(--line-height-work-station);
	}
`;

export const GridAutoFitTemplate = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(${(props) => props.minmax}, 1fr)
	);
	grid-auto-rows: 1fr;
	justify-items: center;
	width: 100%;
	gap: 40px 25px;

	@media ${device.mobileL} {
		grid-template-columns:  1fr;
		background: green;
	}
`;
