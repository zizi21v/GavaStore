import { Tops } from "./Tops"; 
import { Tshirt } from "./Oversized";
import { Accesories } from "./Accesories";

const Categories = {Tops, Tshirt, Accesories}

export const Allproducts = Tops.productos.concat(Tshirt.productos).concat(Accesories.productos);

 export {Categories};