import React from "react";
import {
	RiFolder3Fill,
	RiMailFill,
	RiMarkdownFill,
	RiWhatsappFill
} from "react-icons/ri";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Explorer from "../components/shared/Explorer";
import WorkStationSection from "../components/shared/WorkStationSection";
import SobreMiAnalitico from "../components/sobre-mi/SobreMiAnalitico";
import SobreMiAutodidacta from "../components/sobre-mi/SobreMiAutodidacta";
import SobreMiCreativo from "../components/sobre-mi/SobreMiCreativo";
import SobreMiIndex from "../components/sobre-mi/SobreMiIndex";
import SobreMiProactivo from "../components/sobre-mi/SobreMiProactivo";
import SobreMiResponsable from "../components/sobre-mi/SobreMiResponsable";
import SobreMiUniversidad from "../components/sobre-mi/SobreMiUniversidad";
import { device } from "../styles/Breakpoints";
import Error404 from "./Error404";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: var(--max-width-explorer) 1fr;
	> * {
		outline: var(--outline);
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

const Content = styled.div`
	display: grid;
	grid-template-columns: 1.3fr 1fr;

	> section {
		outline: var(--outline);
	}
`;

const removeAccents = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const ItemListSpanDefault = ({ name }) => {
	return (
		<span className=" item-list-span">
			<Link
				to={removeAccents(name) === "index" ? "" : removeAccents(name)}
			>
				<span className="section_explorer-flex">
					<RiMarkdownFill />
					{name}
				</span>
			</Link>
		</span>
	);
};

const SobreMi = () => {
	const URL_WSP =
		"https://api.whatsapp.com/send?phone=51933124563&text=Hola,%20estoy%20interesado%20en%20tu%20trabajo...";

	const SectionsExplorer = [
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
						<a href="mailto:genaro.choquehuanca.palli@gmail.com?Subject=SERVICIO%20DESARROLLO%20WEB">
							mandame_un_correo
						</a>
					</span>
					<span className="section_explorer-flex item-list-span">
						<RiWhatsappFill />
						<a
							href={URL_WSP}
							target="_blank"
							rel="noopener noreferrer"
						>
							mandame_un_whatsapp
						</a>
					</span>
				</SectionExplorer>
			),
		},
	];

	return (
		<Container>
			<Explorer sections={SectionsExplorer} />
			<Content>
				<WorkStationSection>
					<Routes>
						<Route path="/">
							<Route index element={<SobreMiIndex />} />
							<Route
								path="/creativo"
								element={<SobreMiCreativo />}
							/>
							<Route
								path="/analitico"
								element={<SobreMiAnalitico />}
							/>
							<Route
								path="/proactivo"
								element={<SobreMiProactivo />}
							/>
							<Route
								path="/responsable"
								element={<SobreMiResponsable />}
							/>
							<Route
								path="/universidad"
								element={<SobreMiUniversidad />}
							/>
							<Route
								path="/autodidacta"
								element={<SobreMiAutodidacta />}
							/>
						</Route>
						<Route
							path="*"
							element={
								<Error404 message="Seleccione un archivo." />
							}
						/>
					</Routes>
				</WorkStationSection>
				<WorkStationSection>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Libero blanditiis nulla odio voluptas ex, vero voluptatum
					excepturi labore ipsa ut quia doloribus ullam. Numquam
					voluptatem sunt modi quod ipsum voluptatum.
				</WorkStationSection>
			</Content>
		</Container>
	);
};

export default SobreMi;
