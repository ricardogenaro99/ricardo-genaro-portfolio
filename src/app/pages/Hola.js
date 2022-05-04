import React from "react";
import styled from "styled-components";
import { Coment } from "../components/Coments";

const Container = styled.div`
	margin: auto;
	display: grid;
	grid-template-columns: auto auto;

	.section-left {
		display: grid;
		gap: 3.3em;
		div {
			display: grid;
			gap: 0.43em;

			&:nth-child(1) {
				h1 {
					font-size: var(--size-headline);
					font-weight: 400;
				}
				h2 {
					font-size: var(--size-subheadline);
					color: var(--secondary-color-purple);
				}
				span,
				h2 {
					font-weight: 450;
				}
				span,
				h1 {
					color: var(--secondary-color-white);
				}
			}
		}
	}
`;
const Hola = () => {
	return (
		<Container>
			<section className="section-left">
				<div>
					<span>Hola a todos, yo soy</span>
					<h1>Ricardo Genaro</h1>
					<h2> {">"} Front-end developer</h2>
				</div>
				<div>
					<Coment>// complete the game to continue</Coment>
					<Coment>// you can also see it on my Github page</Coment>
					<span>
						const githubLink = “https://github.com/example/url”
					</span>
				</div>
			</section>
			<section>
				<img
					src="https://www.droptica.com/sites/droptica.com/files/media/image/react.png"
					alt=""
				/>
			</section>
		</Container>
	);
};

export default Hola;
