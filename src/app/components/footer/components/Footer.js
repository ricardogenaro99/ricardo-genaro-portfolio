import { RiGithubFill, RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import { FooterContainer } from "../styles/StyledComponents";

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
