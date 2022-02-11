import { Link } from "react-router-dom";



import "./Categories.css";

export function Icategories() {
  return (
    <div>
      <h1 className="Title-categories">Categorias</h1>
      <div className="Section-Categories">
          
            <div className="Self-Categories">
              <img src="https://drive.google.com/uc?export=download&id=1IxFcPchD2JBK_fcb7A6vM5hBTQMfwQ3Q" alt="categorias"></img>
              <Link to="/Tops"> Tops </Link>
            </div>
            <div className="Self-Categories">
              <img src="https://drive.google.com/uc?export=download&id=1RgoYyGeW6ytpUNov6rJR09lG9EyB9RQ_"alt="categorias"></img>
              <Link to="/Tshirt">T-shirt Oversized</Link>
            </div>
            <div className="Self-Categories">
              <img src="https://drive.google.com/uc?export=download&id=1nj66QhJ6vYWvwK2kJuSRm_FmdlpsDVj-" alt="categorias"></img>
              <Link to="/Accesories">Accesorios</Link>
            
             
             </div>
       

  
      </div>
    </div>
  );
}
