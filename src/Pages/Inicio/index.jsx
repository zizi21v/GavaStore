import  { Header } from "../Header/Index"
 import { BestProductsList } from "../../Components/BestSeller/CardBestSeller"
import {Icategories} from "../../Components/Categorias/RouterCategories"
import {Info} from "../Info/Info"



export function Inicio () {
    return (
        <div className="Init">
     <Header/>
     <BestProductsList/>
     <Icategories/>
     <Info/>
   
     </div>
    )
}
