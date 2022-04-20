import classes from "./Header.module.css"
import headerImage from "../../assets/header.jpg";


function Header({ image, title, children }) {

  return (
    <>
      <header className={classes.Header}>
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