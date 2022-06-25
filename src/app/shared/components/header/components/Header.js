import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
	ButtonMenu,
	HeaderContainer,
	sizeButtonMenu
} from "../styles/StyledComponents";
import Navbar from "./Navbar";

const Header = () => {
	const [watchMenu, setWatchMenu] = useState(false);

	const clickItemButtonMenu = () => setWatchMenu(!watchMenu);

	return (
		<HeaderContainer>
			<div className="container-header">
				<div className="name-portfolio">
					<Link to="/">
						<h1>ricardo-genaro</h1>
					</Link>

					<ButtonMenu onClick={clickItemButtonMenu}>
						<RiMenuFill size={sizeButtonMenu} />
					</ButtonMenu>
				</div>

				<Navbar
					watchMenu={watchMenu}
					clickItemMenu={() => setWatchMenu(false)}
				/>
			</div>
		</HeaderContainer>
	);
};

export default Header;
