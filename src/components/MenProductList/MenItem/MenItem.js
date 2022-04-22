import { Link } from "react-router-dom";
import classes from "./MenItem.module.css";
import menImage from "../../../assets/men-pro1.jpg";
function MenItem({ men }) {
  return (
    <div className="MenItem">
      <div className="card">
        <img src={menImage} alt="men" />
        <div>
          <Link to="/">Cotton drawstring hoodie</Link>
          <div className={classes.price}>$290</div>
        </div>
      </div>
      <Link to={men.path}>{men.title}</Link>
      <div className={classes.price}>${men.price}</div>
    </div>
  );
}

export default MenItem;
