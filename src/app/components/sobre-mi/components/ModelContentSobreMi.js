import React, { Fragment } from "react";
import { ComentMultiple } from "../../../shared/components";
import { removeAccents } from "../../../shared/utils/Funtions";
import { ContainerItemSectionPage } from "../styles/StyledComponents";

const ModelContentSobreMi = ({ items, paramLink }) => {
	return (
		<Fragment>
			{items.map((item, i) => (
				<Fragment key={i}>
					<ContainerItemSectionPage
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
				</Fragment>
			))}
		</Fragment>
	);
};

export default ModelContentSobreMi;
