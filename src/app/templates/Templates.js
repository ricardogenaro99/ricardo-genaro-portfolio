import styled from 'styled-components';
import { device } from '../styles/Breakpoints';

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


export const WorkStationSection = styled.section`
	padding: var(--padding-work-station);
	overflow-y: auto;
	line-height: var(--line-height-work-station);
	* {
		line-height: var(--line-height-work-station);
	}
`;


