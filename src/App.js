import "./App.css";
import { NavBar } from "./Components/Navbar/NavbarElements";
import {FaInstagram}  from "react-icons/fa";
import {FaTruck}  from "react-icons/fa";
import {FaCreditCard}  from "react-icons/fa";
import {FaWhatsapp}  from "react-icons/fa";



function App() {
  return (
    <div className="App">
      <header>
     <NavBar/>
         <div className="App-header">
          <h1>IF YOU LIKE IT</h1>
        </div>
        <div className="App-header">
          <h1>WEAR IT</h1>
        </div>
      </header> 
      <div>
        Productos
        </div>  
       <div>
         <div> <FaTruck/> ENVIAMOS TU COMPRA <br/> Hacemos envios a nivel nacional </div>
         <div><FaCreditCard/>PAGA COMO QUIERAS <br/> Tenemos diferentes opciones </div>
         </div>
         <footer>
        <div>
          <p>Encuentranos en:</p>
         <a href="https://www.instagram.com/_Gava.store/"><FaInstagram/></a>
         <a href="https://api.whatsapp.com/send/?phone=584143057366&text=Hola%21+Estoy+interesad%40+en+&app_absent=0"><FaWhatsapp/></a>
         </div>
         <div>
          <p>Metodos de pago:</p>
          

         </div>
         
         </footer>

       </div>
  );
}

export default App;
