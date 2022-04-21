
import "./pages.css";
import Header from "../components/Header/Header";
import headerImage from "../assets/sport.jpg";
function Sport() {
  return (
    <>
    {/* <article>
    <h1>This is sport page.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas id, laboriosam necessitatibus, dolore corrupti. Explicabo iure doloribus illum repudiandae tenetur.</p>
  </article>
  */}
    <Header
      title="
      Choose your style"
      image={headerImage}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas id, laboriosam necessitatibus, dolore corrupti. Explicabo iure doloribus illum repudiandae tenetur.
    </Header>
  </>
  );
}


export default Sport;