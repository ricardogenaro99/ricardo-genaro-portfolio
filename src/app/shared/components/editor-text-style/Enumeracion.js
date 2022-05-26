import React from "react";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";
import { maxRowsCodeEffect } from "./const";

export const Coment = styled.span`
	color: var(--secondary-color-gray);
`;

export const ComentMultipleStyle = styled.div`
	width: 100%;
	> .content {
		color: var(--secondary-color-gray);
		display: grid;
		grid-template-columns: 60px 1fr;
		.section-numbers {
			position: relative;
			overflow: hidden;
			> div {
				position: absolute;
				height: 100%;
				width: 50%;
				user-select: none;
				> span {
					display: flex;
					justify-content: flex-end;
					align-items: center;
				}
			}
		}

		.text {
			padding: 0 2px;
		}

		@media ${device.mobileM} {
			grid-template-columns: 0px 1fr;
		}
	}
`;

export const Enumeracion = ({ children }) => {
	const insertarNumeros = () => {
		const arr = [];
		for (let index = 0; index < maxRowsCodeEffect * 2; index++) {
			arr.push(<span key={index}>{index + 1}</span>);
		}
		return arr;
	};

	return (
		<ComentMultipleStyle>
			<div className="content">
				<div className="section-numbers">
					<div>{insertarNumeros()}</div>
				</div>
				<div className="text">{children}</div>
			</div>
		</ComentMultipleStyle>
	);
};
