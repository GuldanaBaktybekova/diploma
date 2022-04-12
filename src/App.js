import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import New from "./pages/New";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Sport from "./pages/Sport";
import Discounts from "./pages/Discounts";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Nav />
     <Header/>
     <Routes>
       <Route path="/"element={<Home />}/>
       <Route path="/new" element={<New />}/>
       <Route path="/men"element={<Men />}/>
       <Route path="/women"element={<Women />}/>
       <Route path="/sport"element={<Sport />}/>
       <Route path="/discounts"element={<Discounts />}/>
     </Routes>

     <Footer/>
    </div>
  );
}

export default App;

