import { RiMarkdownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { removeAccents } from "app/shared/utils/globalFuntions";

const ItemListSpanDefault = ({ path, name }) => {
  const pathClean = removeAccents(path);
  const targetPath = pathClean === "index" ? "" : pathClean;
  const hashTarget = removeAccents(name);
  const fullPath = targetPath ? `/sobre-mi/${targetPath}#${hashTarget}` : `/sobre-mi#${hashTarget}`;

  // Homologate names to match open markdown files format
  const displayName = name === "index" ? "SobreMi.md" : `${name}.md`;

  return (
    <span className="item-list-span">
      <Link to={fullPath}>
        <span className="section_explorer-flex">
          <RiMarkdownFill />
          {displayName}
        </span>
      </Link>
    </span>
  );
};

export default ItemListSpanDefault;
