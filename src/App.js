// import Nav from "./components/Nav/Nav";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

import Men from "./pages/Men";
import Women from "./pages/Women";
import Sport from "./pages/Sport";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
    
  

  
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/sport" element={<Sport />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
