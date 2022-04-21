import { Link } from "react-router-dom";
import classes from "./MenItem.module.css";
import menImage from "../../../assets/men-pro1.jpg";
function MenItem({product}) {
  return (  
    <div className="MenItem">
      <img src={menImage} alt="men"/>
      <div>
        <Link to="/">Cotton drawstring hoodie</Link>
        <div className={classes.price}>$290</div>
      </div>
      <img src={menImage} alt="men"/>
      <div>
        <Link to="/">Cotton drawstring hoodie</Link>
        <div className={classes.price}>$290</div>
      </div>
      <img src={menImage} alt="men"/>
      <div>
        <Link to="/">Cotton drawstring hoodie</Link>
        <div className={classes.price}>$290</div>
      </div>
    </div>
  );

  }

export default MenItem;