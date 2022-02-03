import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Categorias } from "../Categorias/index"
import { Inicio } from "../Inicio/index";
import Logo from "../Assets/Images/OjoGava.png";

function NavBar (){
return(<BrowserRouter>
  <nav className="navbar">
    <li>
      <Link to="/Inicio"> Inicio </Link>
    </li>
    <img src={Logo} alt="Logo" />
    <li>
      <Link to="/Categorias"> Categorias </Link>
    </li>
  </nav>
  <Routes>
    <Route path="/Inicio" element={<Inicio />}></Route>
    <Route path="/Categorias" element={<Categorias />}></Route>
  </Routes>
</BrowserRouter>
);

};


export {NavBar};