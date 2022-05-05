import React from "react";
import { RiGithubFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import styled from "styled-components";
import { device } from "../../styles/Breakpoints";

const FooterContainer = styled.footer`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	section {
		display: grid;

		&.social-footer {
			grid-template-columns: repeat(3, max-content);
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
			outline: 1px solid var(--lines-color);
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
const Footer = () => {
	return (
		<FooterContainer>
			<section className="social-footer">
				<div>find me in:</div>

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
		</FooterContainer>
	);
};

export default Footer;
