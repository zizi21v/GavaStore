
import {  useContext } from "react";
import { ShoppingCard } from "./Shoppingcard";
import {CartContext} from "../Context/CartContext";
import './Cart.css'

export const ShoppingCart = () => {
  const [state] = useContext(CartContext);
  

  
  return (
    <div className="ShoppingC-Container">
      <div className="ShoppingC-Text">
      <h2>Carrito de compras</h2>
       </div>
      <article className="ShoppingItems"></article>
      {state?.cart?.map((product) => (
        <div key={"div" + product.id}>
          <ShoppingCard
            key={product.id}
            data={state.products.find((item) => item.id === product.id)}
            Quantity={product.Quantity}
          />
        </div>
      ))}
     <p className="Total">TOTAL:0</p>
    </div>
  );
};

