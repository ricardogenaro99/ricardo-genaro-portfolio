import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ComentMultiple } from "../../../shared/components";
import { removeAccents } from "../../../shared/utils/Funtions";
import { ContainerItemSectionPage } from "../styles/StyledComponents";

const ModelContentSobreMi = ({ items, paramLink }) => {
	const location = useLocation();
	useEffect(() => {
		const item = document.getElementById(removeAccents(paramLink));
		if (item) {
			item.scrollIntoView({ block: "center", behavior: "smooth" });
		}
	}, [paramLink]);

	return (
		<Fragment>
			{location.pathname === "/sobre-mi/aptitudes" && (
				<ComentMultiple>
					Capacidad de análisis tanto inferencial como creativo, juicio crítico
					para la solución de problemas, aprendizaje rápido, actitud positiva y
					proactividad
				</ComentMultiple>
			)}
			<br />
			{items.map((item, i) => (
				<Fragment key={i}>
					<ContainerItemSectionPage
						id={removeAccents(item.itemName)}
						className={
							removeAccents(item.itemName) === removeAccents(paramLink)
								? "active-item-page"
								: ""
						}
						key={i}
					>
						&nbsp;
						<br />
						<h3 className="itemName">_{item.itemName}</h3>
						{item.contentItem.map((e, j) => (
							<Fragment key={j}>
								&nbsp;
								<br />
								{e.titulo && <h4>{`// ${e.titulo}`}</h4>}
								<ComentMultiple>{e.cuerpo}</ComentMultiple>
							</Fragment>
						))}
						&nbsp;
						<br />
					</ContainerItemSectionPage>
					&nbsp;
					<br />
					&nbsp;
					<br />
				</Fragment>
			))}
		</Fragment>
	);
};

export default ModelContentSobreMi;
