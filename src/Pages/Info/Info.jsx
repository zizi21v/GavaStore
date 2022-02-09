import {HiTruck}  from "react-icons/hi";
import {FaCreditCard}  from "react-icons/fa";
import "./Info.css"
export function Info  ()  {
   
    
    return (
      
       <div className="Info">
       <div className="Info-Container"><HiTruck className="Info-Icons"/><div className="Info-text">  ENVIAMOS TU COMPRA <br/> Hacemos envios a nivel nacional </div></div>
       <div className="Info-Container"><FaCreditCard className="Info-Icons"/><div className="Info-text">  PAGA COMO QUIERAS <br/> Tenemos diferentes opciones </div></div>
       </div>
       
      )
    };