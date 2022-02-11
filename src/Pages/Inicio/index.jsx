import  { Header } from "../Header/Index"
 import { BestProductsList } from "../../Components/BestSeller/CardBestSeller"
import {Icategories} from "../../Components/Categorias/RouterCategories"
import {Info} from "../Info/Info"



export function Inicio () {
    return (
        <>
     <Header/>
     <BestProductsList/>
     <Icategories/>
     <Info/>
   
     </>
    )
}
