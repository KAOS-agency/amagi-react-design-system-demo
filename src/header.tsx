import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from "@kaos-agency/amagi-react-design-system";

const Header = () => {
  return (
    <Navbar align="left" logo="https://www.amagi.com/images/logo-white.svg">
      <Nav>
        <NavItem active>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://github.com/KAOS-agency/amagi-react-design-system"
            target="_blank"
          >
            GitHub
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://kaos-agency.github.io/amagi-react-design-system"
            target="_blank"
          >
            Storybook
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
