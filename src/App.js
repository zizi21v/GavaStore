import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProductsList } from "../src/Components/Categorias/CardBox";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./styleNav.css";
import { Inicio } from "./Pages/Inicio/index";
import { Pagecategories } from "../src/Components/Categorias/CategoriePage";
import {ShoppingCart} from "../src/Components/Cart/ShoppingCart"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className="navbar">
            <div className="Inicio">
              <Link to="/Inicio">Inicio</Link>
            </div>
            <img
              className="Logo"
              src="https://drive.google.com/uc?export=download&id=142Of3W-8wgzE47IpPizjRmqwos-GV32J"
              alt="Logo"/>
            <div className="Inicio">
                <Link to="/Pagecategories">Categorias</Link>
            </div>
            <Link to="/ShoppingCart"><HiOutlineShoppingCart className="Cart" /></Link> 
          </div>
        </nav>

        <Routes>
          <Route path="/*" element={<Inicio />}></Route>
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/Tops" element={<ProductsList />}></Route>
          <Route path="/Tshirt" element={<ProductsList />}></Route>
          <Route path="/Accesories" element={<ProductsList />}></Route>
          <Route path="/Pagecategories" element={<Pagecategories />}></Route>
          <Route path="/ShoppingCart" element= {<ShoppingCart/>}></Route>
        </Routes>
      </BrowserRouter>
     
   
     
    </div>
  );
}

export default App;
