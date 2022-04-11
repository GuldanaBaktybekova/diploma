import "./Nav.css";
function Nav() {
  return (
    <nav className="Nav">
      <div className="Logo"> Beauty & Fashion</div>
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
