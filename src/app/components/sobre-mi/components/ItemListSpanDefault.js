import { RiMarkdownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { removeAccents } from "../../../shared/utils/globalFuntions";

const ItemListSpanDefault = ({ path, name, changeParam }) => {
  return (
    <span className="item-list-span">
      <Link
        to={removeAccents(path) === "index" ? "" : removeAccents(path)}
        onClick={() => changeParam(name)}
      >
        <span className="section_explorer-flex">
          <RiMarkdownFill />
          {name}
        </span>
      </Link>
    </span>
  );
};

export default ItemListSpanDefault;
