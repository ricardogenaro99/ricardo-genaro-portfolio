import React from "react";
// import "./Checked.css";
import styled from "styled-components";

const checkSize = "15px";

const CheckedContainer = styled.label`
  border: 2px solid var(--secondary-color-gray);
  background: var(--primary-color-blue-active);
  border-radius: 4px;
  transform: translate3d(0, 0, 0);
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: var(--secondary-color-gray-hover-item);
  }

  .flip {
    display: block;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform-style: preserve-3d;
    position: relative;
    width: ${checkSize};
    height: ${checkSize};
  }

  .cbx-input {
    display: none;
  }

  .cbx-input:checked + .cbx {
    border-color: var(--secondary-color-gray);
  }

  .cbx-input:checked + .flip {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: ${checkSize};
    height: ${checkSize};
    border-radius: 2px;
  }

  .front {
    background: var(--primary-color-blue-active);
    z-index: 1;
  }

  .back {
    transform: rotateY(180deg);
    background: var(--secondary-color-gray);
    text-align: center;
    color: #fff;
    line-height: ${checkSize};
    box-shadow: 0 0 0 1px var(--secondary-color-gray);
  }

  .back svg {
    margin-top: 3px;
    fill: none;
  }

  .back svg path {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const Checked = ({ name, active, setActive }) => {
  return (
    <CheckedContainer className="cbx" htmlFor={name}>
      <div className="checkmark">
        <input
          type="checkbox"
          className="cbx-input"
          id={name}
          checked={active}
          onChange={setActive}
        />
        <div className="flip">
          <div className="front"></div>
          <div className="back">
            <svg viewBox="0 0 15 15" height="10" width="12">
              <path d="M2 8.5L6 12.5L14 1.5"></path>
            </svg>
          </div>
        </div>
      </div>
    </CheckedContainer>
  );
};

export default Checked;
