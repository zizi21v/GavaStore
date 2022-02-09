import { Cards } from "../Categorias/CardCategories";
import { BestSeller } from "./BestProdcucts";
import "./BestProducts.css"
export const BestProductsList = () => {
   
    
  return (
      <div>
    <div className='containerCards'>
      {BestSeller.map((BestSeller) => (
                          <Cards
                          key={BestSeller.id}
                          data={BestSeller}
                          />
      ))}
    </div>
     
     </div>
    )
  };