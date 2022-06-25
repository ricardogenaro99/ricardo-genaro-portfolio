import { Nav } from "../styles/StyledComponents";
import NavLinkComponent from "./NavLinkComponent";

const Navbar = ({ watchMenu, clickItemMenu }) => {
	return (
		<Nav watchMenu={watchMenu}>
			<section>
				<NavLinkComponent clickItemMenu={clickItemMenu} name="_hola" />
				<NavLinkComponent
					clickItemMenu={clickItemMenu}
					path="/sobre-mi"
					name="_sobre_mi"
				/>
				<NavLinkComponent
					clickItemMenu={clickItemMenu}
					path="/proyectos"
					name="_proyectos"
				/>
			</section>
			<section>
				<NavLinkComponent
					clickItemMenu={clickItemMenu}
					path="/contactame"
					name="_contactame"
				/>
			</section>
		</Nav>
	);
};

export default Navbar;
