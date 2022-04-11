import "./Nav.css";
import Logo from "../ui/Logo/Logo";
function Nav() {
  return (
    <nav className="Nav">
      <Logo/>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">New</a>
        </li>
        <li>
          <a href="/">Men</a>
        </li>
        <li>
          <a href="/">Women</a>
        </li>
        <li>
          <a href="/">Sport</a>
        </li>
        <li>
          <a href="/">Discounts</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
