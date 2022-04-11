import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import New from "./pages/New";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Sport from "./pages/Sport";
import Discounts from "./pages/Discounts";


function App() {
  return (
    <div className="App">
     <Nav />
     <Header/>
     <Home/>
     <New/>
     <Men/>
     <Women/>
     <Sport/>
     <Discounts/>

     <Footer/>
    </div>
  );
}

export default App;

