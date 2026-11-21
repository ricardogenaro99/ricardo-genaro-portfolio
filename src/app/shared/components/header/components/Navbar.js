import { Nav, NavLinkStyle } from "../styles/StyledComponents";
import NavLinkComponent from "./NavLinkComponent";
import { URL_GENARO_SPACE } from "app/shared/utils/globalConsts";

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
        <NavLinkStyle
          as="a"
          href={URL_GENARO_SPACE}
          target="_blank"
          rel="noopener noreferrer"
          onClick={clickItemMenu}
        >
          _blog
        </NavLinkStyle>
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
