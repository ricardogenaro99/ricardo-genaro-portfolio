import { RiMarkdownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { removeAccents } from "../../../shared/utils/Funtions";

const ItemListSpanDefault = ({ path, name, changeParam }) => {
	return (
		<span className="item-list-span">
			<Link
				to={
					removeAccents(path) === "index"
						? ""
						: `${removeAccents(path)}#${removeAccents(name)}`
				}
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
