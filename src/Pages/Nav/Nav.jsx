
import { Link, Outlet} from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./styleNav.css"
import { Footer } from "../Footer/footer";
export function Nav () {
    return( 
        <>
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
        <Outlet/>
        <Footer/>
        </>
        )
   }