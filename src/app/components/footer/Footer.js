import React from "react";
import { RiGithubFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";

const FooterContainer = styled.footer`
	width: 100%;
	position: absolute;
	bottom: 0;
	width: 100%;
	position: fixed;
	z-index: 1000;
	background: var(--primary-color-dark-blue);
	.container-fixed {
		height: var(--height-footer);
		width: 100%;
		display: flex;
		justify-content: space-between;
		outline: var(--outline);
		section {
			position: relative;
			display: grid;
			outline: var(--outline);
			&.social-footer {
				grid-template-columns: repeat(3, max-content);

				@media ${device.mobileL} {
					div {
						display: none;
					}
				}
			}
			&.github-footer {
				a {
					display: flex;
					gap: 7px;
					span {
						@media ${device.mobileL} {
							display: none;
						}
					}
				}
			}
			a {
				text-decoration: none;
				color: var(--secondary-color-gray);
				transition: var(--transition);
				&:hover {
					background: var(--primary-color-blue);
				}
			}
			> * {
				padding: 0 15px;
				outline: var(--outline);
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		font-size: var(--size-labels);

		* {
			font-size: var(--size-labels);
		}

		@media ${device.mobileL} {
			justify-content: center;

			section,
			a {
				outline: none;
			}
		}
	}
`;
const Footer = () => {
	return (
		<FooterContainer>
			<div className="container-fixed">
				<section className="social-footer">
					<div>encuéntrame en:</div>

					<a
						href="https://www.linkedin.com/in/ricardogenaro/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiLinkedinFill />
					</a>

					<a
						href="https://www.instagram.com/ricardogenaro99/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiInstagramFill />
					</a>
				</section>
				<section className="github-footer">
					<a
						href="https://github.com/ricardogenaro99"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>@ricardogenaro99</span>
						<RiGithubFill />
					</a>
				</section>
			</div>
		</FooterContainer>
	);
};

export default Footer;
