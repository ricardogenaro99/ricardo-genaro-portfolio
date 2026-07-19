import styled from "styled-components";

export const LabelTextAreaInputContainer = styled.div`
  display: grid;
  width: 100%;
  margin: auto;
  gap: 10px;

  .error-msg {
    color: var(--accent-color-error);
    font-size: 0.76em;
    line-height: 1.2em;
    font-weight: 500;
    animation: fadeInError 0.3s ease-out;
  }

  @keyframes fadeInError {
    from {
      opacity: 0;
      transform: translateY(-3px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  input,
  textarea {
    border: 1px solid var(--lines-color);
    width: 100%;
    background: rgba(1, 17, 31, 0.5);
    outline: none;
    border-radius: 8px;
    padding: 14px 18px;
    color: var(--secondary-color-white);
    resize: none;
    font-family: inherit;
    transition: border-color 0.25s ease, background-color 0.25s ease,
      box-shadow 0.25s ease;

    &:hover {
      background: var(--primary-color-blue-active);
      border-color: rgba(77, 91, 206, 0.4);
    }

    &:focus {
      background: var(--primary-color-blue-active);
      border-color: var(--gradients-color-purple);
      box-shadow: 0 0 12px rgba(77, 91, 206, 0.25);
      color: var(--secondary-color-white);
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

export const MensajeEnviadoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  max-width: 400px;

  * {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;

    span {
      font-size: 1.8em;
      font-weight: 450;
      color: var(--secondary-color-white);
    }

    img {
      height: 50px;
      width: 50px;
    }
  }
`;
