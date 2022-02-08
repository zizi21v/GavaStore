import {FaInstagram}  from "react-icons/fa";
import {FaWhatsapp}  from "react-icons/fa";
import {AiFillDollarCircle}  from "react-icons/ai";
import "./footer.css"

export function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-Contact">
        <p>Encuentranos en:</p>
        <a href="https://www.instagram.com/_Gava.store/">
          <FaInstagram className="Footer-Icons" />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=584143057366&text=Hola%21+Estoy+interesad%40+en+&app_absent=0">
          <FaWhatsapp className="Footer-Icons"  />
        </a>
      </div>
      <div className="Footer-Contact">
        <p>Metodos de pago:</p>
        <img className="Footer-reserve" src= "https://drive.google.com/uc?export=download&id=1mkZRRY3epnXadAGA_pG6RpwZLrnWhhJU" alt="Reserve"/>
        <AiFillDollarCircle className="Footer-Icons" />
        
      </div>
     
    </div>
  );
}
