import { Fragment, useReducer } from "react";
import { Cardsincard} from "../Categorias/CardCategories";
import { CartItem } from "./CartItem";
import { TYPES } from "./ShoppingActions";
import { ShoppingInitialState, ShoppingReducer } from "./ShoppingReducers";

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delfromcart = () => {};
  const clearcart = () => {};
  return (
    <div>
      <h2>Carrito de compras</h2>

      <article className="Box"></article>
      {cart.map((product) => (
        <div key={"div" + product.id}>
    
          <Cardsincard
            key={product.id}
            data={products.find((item) => item.id === product.id)}
          />
          <button
            key={"Boton" + product.id}
            onClick={() => addToCart(product.id)}
          >
            +
          </button>
        </div>
        
      ))}
      <h3>Carrito</h3>
      <article className="Box">
        {/* <button onClick={clearcart}>Limpiar Carrito</button> */}
      </article>
    </div>
  );
};
