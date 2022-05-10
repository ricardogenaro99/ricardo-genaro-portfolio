import React from "react";
import {
	RiFolder3Fill,
	RiMailFill,
	RiMarkdownFill,
	RiPhoneFill,
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
	gap: 10px;
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
			gap: 5px;
		}
	}

	ul {
		padding-left: 18px;
		display: grid;
		gap: 5px;

		li {
			display: flex;
			justify-content: flex-start;
		}
	}

	.item-list-span {
		transition: var(--transition);
		cursor: pointer;
		a {
			color: var(--secondary-color-gray);
			text-decoration: none;
			transition: var(--transition);
		}
		&:hover {
			color: var(--secondary-color-gray-hover-item);
			a {
				color: var(--secondary-color-gray-hover-item);
			}
		}
	}
`;

const ItemListSpanDefault = ({ name }) => {
	return (
		<span className="section_explorer-flex item-list-span">
			<RiMarkdownFill />
			{name}
		</span>
	);
};

const SobreMi = () => {
	const URL_WSP =
		"https://api.whatsapp.com/send?phone=51933124563&text=Hola,%20estoy%20interesado%20en%20tu%20trabajo...";

	const sectionsExplorer = [
		{
			title: "información-personal",
			content: (
				<SectionExplorer>
					<span className="section_explorer-tree">
						<span className="section_explorer-flex">
							<RiFolder3Fill color="var(--accent-color-cream)" />
							bio
						</span>
						<ul>
							<li>
								<ItemListSpanDefault name="index" />
							</li>
						</ul>
					</span>
					<span className="section_explorer-tree">
						<span className="section_explorer-flex">
							<RiFolder3Fill color="var(--accent-color-green)" />
							aptitudes
						</span>
						<ul>
							<li>
								<ItemListSpanDefault name="creativo" />
							</li>
							<li>
								<ItemListSpanDefault name="analítico" />
							</li>
							<li>
								<ItemListSpanDefault name="proactivo" />
							</li>
							<li>
								<ItemListSpanDefault name="responsable" />
							</li>
						</ul>
					</span>
					<span className="section_explorer-tree">
						<span className="section_explorer-flex">
							<RiFolder3Fill color="var(--accent-color-dark-purple)" />
							formación
						</span>
						<ul>
							<li>
								<ItemListSpanDefault name="universidad" />
							</li>
							<li>
								<ItemListSpanDefault name="autodidacta" />
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
					<span className="section_explorer-flex item-list-span">
						<RiMailFill />
						genaro.choquehuanca.palli@gmail.com
					</span>
					<span className="section_explorer-flex item-list-span">
						<RiPhoneFill />
						<a
							href={URL_WSP}
							target="_blank"
							rel="noopener noreferrer"
						>
							+51 933124563
						</a>
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
