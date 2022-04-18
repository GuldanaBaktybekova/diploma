import "./Header.css";
import headerImage from "../../assets/models4.jpg";


function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

function Header({ image, title, children }) {
  return (
    <header className="Header" style={style}>
      <h1>The most fresh coffee beans</h1>
      <p>This is an internet shop</p>
 
    <header className="Header">
      <img src={image} />
      <section>
        <h1>{title}</h1>
        <p>{children}</p>
      </section>
    </header>
  );
}
export default Header;