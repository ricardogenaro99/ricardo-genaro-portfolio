import { NavLinkStyle } from "../styles/StyledComponents";

const NavLinkComponent = ({ path = "/", name, clickItemMenu }) => {
  return (
    <NavLinkStyle to={path} onClick={clickItemMenu}>
      {name}
    </NavLinkStyle>
  );
};

export default NavLinkComponent;
