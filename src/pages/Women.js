
import "./pages.css";

import Header from "../components/Header/Header";
import headerImage from "../assets/women.jpg";
import WomenProductList from "../components/WomenProductList/WomenProductList";
function Women() {
  const womens = {};
  return (
    <>
    {/* <article>
    <h1>This is Women page.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas id, laboriosam necessitatibus, dolore corrupti. Explicabo iure doloribus illum repudiandae tenetur.</p>
  </article> */}
 
    <Header
      title=""
      image={headerImage}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas id, laboriosam necessitatibus, dolore corrupti. Explicabo iure doloribus illum repudiandae tenetur.
    </Header>
    
    <WomenProductList womens={womens}/>

  </>
  );
}

export default Women;