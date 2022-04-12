import "./Nav.css";
import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";
function Nav() {
  return (
    <nav className="Nav">
      <Logo/>
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/new">New</NavItem>
        <NavItem url="/men">Men</NavItem>
        <NavItem url="/women">Women</NavItem>
        <NavItem url="/sport">Sport</NavItem>
        <NavItem url="/discounts">Discounts</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;
