import "./Header.css";
import headerImage from "../../assets/header-clothes.jpg";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <header className="Header" style={style}>
      <h1>All the most fashionable</h1>
      <p>This is an online fashion store</p>
    </header>
  );
}
export default Header;
