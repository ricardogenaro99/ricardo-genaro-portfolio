import React from "react";
import styled from "styled-components";
import { RiInstagramFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

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
		a {
			text-decoration: none;
			color: var(--secondary-color-gray);
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
					{/* <span>@ricardogenaro99</span> */}
					<RiGithubFill />
				</a>
			</section>
		</FooterContainer>
	);
};

export default Footer;
