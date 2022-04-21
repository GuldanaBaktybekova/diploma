import "./Men.css";
import "./pages.css";

import Header from "../components/Header/Header";
import headerImage from "../assets/men2.jpg";
import MenProductList from "../components/MenProductList/MenProductList";
function Men() {
  const mens = {};
  return (
    <>
    
    <Header
      title=""
      image={headerImage}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur voluptatum doloribus enim repudiandae.
    </Header>
    <MenProductList mens={mens}/>
  </>
  );
}

export default Men;