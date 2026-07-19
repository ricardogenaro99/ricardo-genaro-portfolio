import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { ComentMultiple } from "app/shared/components";
import { removeAccents } from "app/shared/utils/globalFuntions";
import { ContainerItemSectionPage } from "../styles/StyledComponents";

const ModelContentSobreMi = ({ items }) => {
  const location = useLocation();

  // Find the active item name from the hash
  const activeHash = location.hash ? decodeURIComponent(location.hash.slice(1)) : null;

  // Filter items based on active hash, or default to first item
  const filteredItems = activeHash
    ? items.filter((item) => removeAccents(item.itemName) === activeHash)
    : [items[0]];

  const itemsToRender = filteredItems.length > 0 ? filteredItems : [items[0]];

  return (
    <Fragment>
      {location.pathname === "/sobre-mi/aptitudes" ? (
        <ComentMultiple>
          Capacidad de análisis tanto inferencial como creativo, juicio crítico
          para la solución de problemas, aprendizaje rápido, actitud positiva y
          proactividad
        </ComentMultiple>
      ) : null}
      <br />
      {itemsToRender.map((item, i) => (
        <Fragment key={i}>
          <ContainerItemSectionPage
            id={removeAccents(item.itemName)}
            className="active-item-page"
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
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ModelContentSobreMi;
