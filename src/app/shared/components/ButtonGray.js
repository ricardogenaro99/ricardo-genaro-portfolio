import styled from "styled-components";

export const ButtonGrayContainer = styled.button`
	cursor: pointer;
	padding: 10px;
	background: var(--button-gray);
	text-decoration: none;
	border-radius: 8px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	&:not(.disabled):hover {
		background: var(--button-gray-hover);
	}
`;

const ButtonGray = ({ children, onClick, type, id, disabled }) => {
	return (
		<ButtonGrayContainer
			id={id}
			type={type || "button"}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</ButtonGrayContainer>
	);
};

export default ButtonGray;
