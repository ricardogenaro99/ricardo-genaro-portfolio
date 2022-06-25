import { RiFolder3Fill, RiMailFill, RiWhatsappFill } from "react-icons/ri";
import { URL_MAIL, URL_WSP } from "../../shared/utils/Urls";
import ItemListSpanDefault from "./components/ItemListSpanDefault";
import { pathNameLink } from "./pathNameLink";
import {
    SectionExplorerSobreMi
} from "./styles/StyledComponents";

export const sectionsExplorer = (changeParam) => [
	{
		title: "información-personal",
		content: (
			<SectionExplorerSobreMi>
				{pathNameLink.map((section, i) => (
					<span key={i} className="section_explorer-tree">
						<span className="section_explorer-flex">
							<RiFolder3Fill color={section.color} />
							{section.sectionName}
						</span>
						<ul>
							{section.items.map((item, j) => (
								<li key={j}>
									<ItemListSpanDefault
										changeParam={changeParam}
										name={item.itemName}
										path={section.sectionName}
									/>
								</li>
							))}
						</ul>
					</span>
				))}
			</SectionExplorerSobreMi>
		),
	},
	{
		title: "contacto",
		content: (
			<SectionExplorerSobreMi>
				<span className="section_explorer-flex item-list-span">
					<RiMailFill />
					<a href={URL_MAIL}>mándame_un_correo</a>
				</span>
				<span className="section_explorer-flex item-list-span">
					<RiWhatsappFill />
					<a href={URL_WSP} target="_blank" rel="noopener noreferrer">
						mándame_un_whatsapp
					</a>
				</span>
			</SectionExplorerSobreMi>
		),
	},
];
