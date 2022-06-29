import { Fragment, useEffect } from "react";
import { ComentMultiple } from "../../../shared/components";
import { removeAccents } from "../../../shared/utils/Funtions";
import { ContainerItemSectionPage } from "../styles/StyledComponents";

const ModelContentSobreMi = ({ items, paramLink }) => {
	useEffect(() => {
		const item = document.getElementById(removeAccents(paramLink));
		if (item) {
			item.scrollIntoView({ block: "center", behavior: "smooth" });
		}
	}, [paramLink]);

	return (
		<Fragment>
			{items.map((item, i) => (
				<Fragment key={i}>
					<ContainerItemSectionPage
						id={removeAccents(item.itemName)}
						className={
							removeAccents(item.itemName) ===
							removeAccents(paramLink)
								? "active-item-page"
								: ""
						}
						key={i}
					>
						<br />
						<h3 className="itemName">_{item.itemName}</h3>
						{item.contentItem.map((e, j) => (
							<Fragment key={j}>
								<br />
								{e.titulo && <h4>{`// ${e.titulo}`}</h4>}
								<ComentMultiple>{e.cuerpo}</ComentMultiple>
							</Fragment>
						))}
						<br />
					</ContainerItemSectionPage>
					<br />
					<br />
				</Fragment>
			))}
		</Fragment>
	);
};

export default ModelContentSobreMi;
