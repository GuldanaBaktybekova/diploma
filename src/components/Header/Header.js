import "./Header.css";
import headerImage from "../../assets/header.jpg";


function Header({ image, title, children }) {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <>
      <header className="Header">
        <img src={image} />
        <section>
          <h1>{title}</h1>
          <p>{children}</p>
        </section>
      </header>
    </>
  )
}

export default Header;