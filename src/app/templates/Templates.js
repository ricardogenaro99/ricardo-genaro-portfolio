import styled from "styled-components";
import { device } from "../shared/styles/Breakpoints";

export const ContainerExplorerAndContentTemplate = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: var(--max-width-explorer) 1fr;
	> * {
		outline: var(--outline);
	}

	@media ${device.tabletS} {
		grid-template-columns: 0px 1fr;
	}
`;

export const WorkStationSectionTemplate = styled.section`
	padding: var(--padding-work-station);
	max-height: var(--height-main);
	overflow-y: auto;
	line-height: var(--line-height-work-station);
	* {
		line-height: var(--line-height-work-station);
	}

	@media ${device.laptop} {
		max-height: none;
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
		grid-template-columns: 1fr;
	}
`;

export const ContainerCenterTemplate = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const ContainerOneColumnGapTemplate = styled.div`
	display: grid;
	gap: ${(props) => props.gap || "20px"};
`;


export const ContentGridTemplate = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.gridTemplateColumns || "1.3fr 1fr"};
	grid-auto-rows: auto;
	> section {
		outline: var(--outline);
	}

	@media ${device.laptop} {
		grid-template-columns: 1fr;
	}
`;