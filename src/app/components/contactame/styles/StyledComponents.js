import styled from "styled-components";

export const LabelTextAreaInputContainer = styled.div`
	display: grid;
	width: 100%;
	margin: auto;
	gap: 10px;

	.error-msg {
		color: var(--accent-color-error);
		font-size: 0.74em;
		line-height: 1.2em;
	}

	input,
	textarea {
		border: none;
		width: 100%;
		background: transparent;
		outline: var(--outline);
		border-radius: 8px;
		padding: 12px 18px;
		color: var(--secondary-color-gray);
		resize: none;
		&:hover,
		&:focus {
			background: var(--primary-color-blue-active);
			color: var(--secondary-color-gray-hover-item);
			outline-width: 2.5px;
		}
	}
`;

export const FormContactameContainer = styled.form`
	max-width: 450px;
	width: 85%;
	margin: auto;
	display: grid;
	gap: 28px;
`;
