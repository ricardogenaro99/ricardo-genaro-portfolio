import React from "react";
import styled from "styled-components";
import { maxRowsCodeEffect } from "./const";

const paddingCommentL = "10px";

export const Coment = styled.span`
  color: var(--secondary-color-gray);
`;

export const ComentMultipleStyle = styled.div`
  > .content {
    color: var(--secondary-color-gray);
    display: grid;
    grid-template-columns: 25px 1fr;
    padding-left: ${paddingCommentL};
    .section-asterisco {
      position: relative;
      overflow: hidden;
      > div {
        position: absolute;
        height: 100%;
        user-select: none;
        > span {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .last-comment {
    padding-left: ${paddingCommentL};
  }

  .last-comment,
  .init-comment {
    user-select: none;
  }
`;

export const ComentMultiple = ({ children }) => {
  const insertarAsterisco = () => {
    const pattern = "*".repeat(maxRowsCodeEffect).split("");
    return pattern.map((e, i) => <span key={i}>{e}</span>);
  };

  return (
    <ComentMultipleStyle>
      <span className="init-comment">{"/**"}</span>
      <div className="content">
        <div className="section-asterisco">
          <div>{insertarAsterisco()}</div>
        </div>
        <div className="text">{children}</div>
      </div>
      <span className="last-comment">{"**/"}</span>
    </ComentMultipleStyle>
  );
};
