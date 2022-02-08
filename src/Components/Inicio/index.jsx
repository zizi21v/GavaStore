import  { Header } from "../Header/Index"
 import { BestProductsList } from "../BestSeller/CardBestSeller"
import {Footer} from "../Footer/footer"
import {Icategories} from "../Categorias/InicioCategories"
import {Info} from "../Info/Info"


export function Inicio () {
    return (
        <>
     <Header/>
     <BestProductsList/>
     <Icategories/>
     <Info/>
     <Footer/>
    
        </>
    )
}
