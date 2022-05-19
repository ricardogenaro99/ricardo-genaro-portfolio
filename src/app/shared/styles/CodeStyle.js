import styled from "styled-components";

export const CodeStyleContainer = styled.code`
	display: flex;
	flex-wrap: wrap;
	gap: ${(props) => props.gap || "0.5em"};

	padding-left: ${(props) => props.padding || 0};

	.code-purple {
		color: var(--secondary-color-purple);
	}

	.code-green {
		color: var(--accent-color-green);
	}

	.code-simb {
		color: var(--secondary-color-yellow);
	}

	.code-cream {
		color: var(--accent-color-cream);
	}

	.code-orange {
		color: var(--accent-color-orange);
	}

	.code-url {
		text-decoration: underline;
		-ms-word-break: break-word;
		word-break: break-word;
		word-break: break-word;
		-ms-hyphens: auto;
		-moz-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
	}

	.code-join {
		-ms-word-break: break-word;
		word-break: break-word;
		word-break: break-word;
		-ms-hyphens: auto;
		-moz-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
	}
`;
