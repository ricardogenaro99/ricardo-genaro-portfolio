import styled from "styled-components";

const ButtonGrayContainer = styled.button`
	cursor: pointer;
	padding: 10px;
	background: var(--button-gray);
	text-decoration: none;
	border-radius: 8px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background: var(--button-gray-hover);
	}
`;

const ButtonGray = ({ children, onClick, type, id }) => {
	return (
		<ButtonGrayContainer id={id} type={type || "button"} onClick={onClick}>
			{children}
		</ButtonGrayContainer>
	);
};

export default ButtonGray;
