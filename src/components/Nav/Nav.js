import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";
function Nav() {
  return (
    <nav className="Nav">
      <Logo/>
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/">New</NavItem>
        <NavItem url="/">Men</NavItem>
        <NavItem url="/">Women</NavItem>
        <NavItem url="/">Sport</NavItem>
        <NavItem url="/">Discounts</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
