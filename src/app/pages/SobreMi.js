import React from "react";
import {
	RiFolder3Fill, RiMailFill, RiMarkdownFill, RiPhoneFill
} from "react-icons/ri";
import styled from "styled-components";
import Explorer from "../components/shared/Explorer";
import { device } from "../styles/Breakpoints";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: var(--max-width-explorer) 1fr;
	> * {
		outline: 1px solid var(--lines-color);
	}

	@media ${device.tabletS} {
		grid-template-columns: 50px 1fr;
	}
`;

const SectionExplorer = styled.div`
	display: grid;
	gap: 8px;
	span {
		-ms-word-break: break-word;
		word-break: break-word;
		word-break: break-word;
		-ms-hyphens: auto;
		-moz-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		&.section_explorer-flex {
			display: flex;
			align-items: center;
			gap: 8px;
		}

		&.section_explorer-tree {
			display: grid;
		}
	}

	ul {
		padding-left: 18px;
	}
`;

const SobreMi = () => {
	const sectionsExplorer = [
		{
			title: "informacion-personal",
			content: (
				<SectionExplorer>
					<span className="section_explorer-tree">
						<span className="section_explorer-flex">
							<RiFolder3Fill color="var(--accent-color-cream)" />
							bio
						</span>
						<ul>
							<li></li>
						</ul>
					</span>
					<span className="section_explorer-tree">
						<span className="section_explorer-flex">
							<RiFolder3Fill color="var(--accent-color-green)" />
							intereses
						</span>
					</span>
					<span className="section_explorer-tree">
						<span className="section_explorer-flex">
							<RiFolder3Fill color="var(--accent-color-dark-purple)" />
							educación
						</span>
						<ul>
							<li>
								<span className="section_explorer-flex">
									<RiMarkdownFill />
									universidad
								</span>
							</li>
							<li>
								<span className="section_explorer-flex">
									<RiMarkdownFill />
									autodidacta
								</span>
							</li>
						</ul>
					</span>
				</SectionExplorer>
			),
		},
		{
			title: "contacto",
			content: (
				<SectionExplorer>
					<span className="section_explorer-flex">
						<RiMailFill />
						genaro.choquehuanca.palli@gmail.com
					</span>
					<span className="section_explorer-flex">
						<RiPhoneFill />
						+51 933124563
					</span>
				</SectionExplorer>
			),
		},
	];

	return (
		<Container>
			<Explorer sections={sectionsExplorer} />
			<section>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Ducimus dignissimos aspernatur molestiae beatae itaque
				consectetur neque omnis quaerat laborum possimus impedit atque
				eaque necessitatibus corporis pariatur, reiciendis aut est
				facere?
				<h3>AUN FALTA RESPONSIVE DESIGN, NO SEAS DESESPERADA PE UWU</h3>
			</section>
		</Container>
	);
};

export default SobreMi;
