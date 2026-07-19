import styled from "styled-components";

export const ButtonGrayContainer = styled.button`
  cursor: pointer;
  padding: 10px 18px;
  background: var(--button-gray);
  text-decoration: none;
  border-radius: 8px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 1px solid transparent;
  transition: background-color 0.2s ease,
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:not(.disabled):hover {
    background: var(--button-gray-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    border-color: rgba(255, 255, 255, 0.08);
  }

  &:not(.disabled):active {
    transform: translateY(0) scale(0.96);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-color-orange);
    outline-offset: 2px;
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
