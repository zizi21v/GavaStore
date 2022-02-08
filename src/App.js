import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProductsList } from "../src/Components/Categorias/CardBox";
import { HiOutlineShoppingCart } from "react-icons/hi"
import './styleNav.css'
import { Inicio } from "../src/Components/Inicio/index"




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <nav >
        <div className="navbar">
          <div className="Inicio">
            <Link to= "/Inicio">Inicio</Link></div>
            <div className="Inicio">
            <Link to="/Accesories"> Accesorios </Link>
          </div>
          <img
            className="Logo"
            src="https://drive.google.com/uc?export=download&id=142Of3W-8wgzE47IpPizjRmqwos-GV32J"
            alt="Logo"
          /> 
          <div className="Inicio"> <Link to="/Tops">Tops</Link></div>
          <div className="Inicio"> <Link to="/Tshirt">T-Shirts</Link> </div>
         
          <HiOutlineShoppingCart className="Cart" />
        </div>
        
</nav>
      

      <Routes>
      
    <Route path="/Inicio" element={<Inicio/>}></Route>
    <Route path="/Tops" element={<ProductsList />}></Route>
    <Route path="/Tshirt" element={<ProductsList />}></Route>
    <Route path="/Accesories" element={<ProductsList />}></Route>
  

  
  </Routes>
     
    </BrowserRouter>
   
  </div>
  );
}

export default App;
