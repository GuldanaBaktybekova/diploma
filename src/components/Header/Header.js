import "./Header.css";
import headerImage from "../../assets/header.jpg";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`,
  };

  return (
    <header className="Header" style={style}>
      <h1>All the most fashionable</h1>
      <p>This is an online fashion store</p>
    </header>
  );
}
export default Header;
