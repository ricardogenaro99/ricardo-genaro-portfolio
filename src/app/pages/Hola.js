import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar-profile.png";
import Card from "../components/hola/Card";
import { Coment } from "../components/shared/Coments";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 3em;
	padding: var(--padding-global);

	.section-left {
		display: grid;
		gap: 3.3em;
		div {
			display: grid;
			gap: 0.43em;

			&.section-left-intro {
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

			&.section-left-code {
				code {
					display: flex;
					flex-wrap: wrap;
					gap: 0.5em;

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
				}
			}
		}
	}

	.section-right {
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
			object-fit: cover;
			filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.8)) brightness(63%);
		}
	}
`;
const Hola = () => {
	const URL_GITHUB = "https://github.com/ricardogenaro99";
	const URL_GITHUB_PORTFOLIO = "/ricardo-genaro-portfolio";

	return (
		<Container>
			<section className="section-left">
				<div className="section-left-intro">
					<span>Hola a todos, soy</span>
					<h1>Ricardo Genaro</h1>
					<h2> {">"} Front-end developer</h2>
				</div>
				<div className="section-left-code">
					<Coment>
						{"// piensa, relajate, inspirate y <codealo/>"}
					</Coment>
					<Coment>
						{"// apoyate de mi código en mi página de Github"}
					</Coment>
					<code>
						<span className="code-purple">const</span>
						<span className="code-green">githubLink</span>
						<span className="code-simb">{"="}</span>
						<span className="code-orange">URL</span>
						<span className="code-simb">{"=>"}</span>
						<a
							className="code-url code-cream"
							href={URL_GITHUB + URL_GITHUB_PORTFOLIO}
							target="_blank"
							rel="noopener noreferrer"
						>
							`{URL_GITHUB + "/"}
							<span className="code-simb">{"${"}</span>
							<span className="code-orange">URL</span>
							<span className="code-simb">{"}"}</span>`
						</a>
					</code>
				</div>
			</section>
			<section className="section-right">
				<Card>
					<img src={avatar} alt="avatar-profile" />
				</Card>
			</section>
		</Container>
	);
};

export default Hola;
