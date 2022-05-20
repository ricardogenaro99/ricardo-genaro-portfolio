import styled from "styled-components";
import { device, size } from "../../../shared/styles/Breakpoints";

const gapPadding = "20px";
const iconTagSize = "30px";

export const ContainerCardProyecto = styled.article`
	max-width: ${(props) => props.maxWidth};
	width: 100%;
	display: grid;
	gap: 20px;

	.name-project {
		color: var(--secondary-color-purple);
	}
`;

export const CardModelStyle = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	border-radius: 15px;
	overflow: hidden;
	outline: 1px solid var(--lines-color);
	background: var(--primary-color-blue-active);

	.img-project-container {
		position: relative;

		.icons-tag {
			position: absolute;
			top: 10px;
			right: 10px;
			display: flex;
			flex-wrap: wrap;
			overflow: hidden;
			.icon-tag {
				border-radius: 4px;
				position: relative;
				width: ${iconTagSize};
				height: ${iconTagSize};
			}
		}
		.img-project {
			height: 140px;
			width: 100%;
			object-fit: cover;
		}
	}

	.body-card {
		display: grid;
		gap: ${gapPadding};
		padding: ${gapPadding} 0;
		> * {
			padding: 0 ${gapPadding};
		}
		> p {
			max-height: 169px;
			overflow-y: auto;
		}
		div {
			display: flex;
		}
	}

	width: 100%;
	height: 100%;
`;

export const SectionExplorerProyectos = styled.div`
	display: grid;
	gap: 10px;
	span {
		-ms-word-break: break-word;
		word-break: break-word;
		word-break: break-word;
		-ms-hyphens: auto;
		-moz-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		&.section_explorer-flex {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		&.check-label-filter {
			.check-filter,
			.label-filter {
				display: flex;
				align-items: center;
				cursor: pointer;
			}
			&:hover {
				color: var(--secondary-color-gray-hover-item);
				.cbx {
					border-color: var(--secondary-color-gray-hover-item);
				}
			}
		}
	}

	ul {
		padding-left: 18px;
		display: grid;
		gap: 5px;

		li {
			display: flex;
			justify-content: flex-start;
		}
	}
`;

export const ContentProyectos = styled.div`
	display: grid;
	> section {
		outline: var(--outline);
	}

	@media ${device.laptop} {
		grid-template-columns: 1fr;
	}
`;

export const ContainerProyectos = styled.div`
	max-width: ${device.laptop};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	padding: var(--padding-global);
	max-width: ${size.desktop};
`;
