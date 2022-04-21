
import "./pages.css";

import Header from "../components/Header/Header";
import headerImage from "../assets/header.jpg";

function Home() {
  return (
    <>
  

      <Header
        title="Welcome to our fashion clothing store!"
        image={headerImage}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur
        voluptatum doloribus enim repudiandae ullam sequi quo suscipit voluptas
        id, laboriosam necessitatibus, dolore corrupti. Explicabo iure doloribus
        illum repudiandae tenetur
      </Header>
    </>
  );
}

export default Home;
