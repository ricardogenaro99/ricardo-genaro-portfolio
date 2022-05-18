import React from "react";
import {
	RiFolder3Fill,
	RiMailFill,
	RiMarkdownFill,
	RiWhatsappFill
} from "react-icons/ri";
import { Link, Route, Routes } from "react-router-dom";
import {
	ContentSobreMi,
	SectionExplorerSobreMi,
	SobreMiAnalitico,
	SobreMiAutodidacta,
	SobreMiCreativo,
	SobreMiIndex,
	SobreMiProactivo,
	SobreMiResponsable,
	SobreMiUniversidad
} from "../components/sobre-mi";
import { Explorer } from "../shared/components";
import { removeAccents } from "../shared/utils/Funtions";
import {
	ContainerExplorerAndContentTemplate,
	WorkStationSectionTemplate
} from "../templates/Templates";
import Error404 from "./Error404";

const ItemListSpanDefault = ({ name }) => {
	return (
		<span className="item-list-span">
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
				<SectionExplorerSobreMi>
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
				</SectionExplorerSobreMi>
			),
		},
		{
			title: "contacto",
			content: (
				<SectionExplorerSobreMi>
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
				</SectionExplorerSobreMi>
			),
		},
	];

	return (
		<ContainerExplorerAndContentTemplate>
			<Explorer sections={SectionsExplorer} />
			<ContentSobreMi>
				<WorkStationSectionTemplate>
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
				</WorkStationSectionTemplate>
				<WorkStationSectionTemplate>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Libero blanditiis nulla odio voluptas ex, vero voluptatum
					excepturi labore ipsa ut quia doloribus ullam. Numquam
					voluptatem sunt modi quod ipsum voluptatum.
				</WorkStationSectionTemplate>
			</ContentSobreMi>
		</ContainerExplorerAndContentTemplate>
	);
};

export default SobreMi;
