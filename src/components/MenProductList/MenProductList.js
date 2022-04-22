import { Link } from "react-router-dom";
import classes from "./MenItem.module.css";

function MenItem({ men }) {
  return (
    <div className={classes.MenItem}>
      <img src={men.image} />
      <div>
        <Link to={men.path}>{men.title}</Link>
        <div className={classes.price}>${men.price}</div>
      </div>
    </div>
  );
}

export default MenItem; 