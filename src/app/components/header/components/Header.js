import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
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
					<h1>ricardo-genaro</h1>
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
