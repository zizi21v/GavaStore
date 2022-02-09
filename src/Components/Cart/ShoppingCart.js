import { useReducer } from "react"
import { Cards } from "../Categorias/CardCategories";
import {CartItem} from "./CartItem"
import { TYPES } from "./ShoppingActions";
import { ShoppingInitialState, ShoppingReducer } from "./ShoppingReducers"


export const ShoppingCart = () => {
    const [state, dispatch] = useReducer( ShoppingReducer, ShoppingInitialState);
    const {products, cart} = state;

    const addToCart = (id) => {
     console.log (id)
     dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
    

    const delfromcart = () => {}
    const clearcart = () => {}
    return (
        <div>
        <h2>Carrito de compras</h2>
        
        <article className="Box"></article>
        {cart.map((product) => <Cards key={product.id} data={products.find(item => item.id === product.id)} addToCart={addToCart}/>)}
         <h3>Carrito</h3>
         <article className="Box">
        <button onClick={clearcart}>Limpiar Carrito</button>
        {cart.map((item,index)=> (<CartItem key={index} data={item} delfromcart={delfromcart}/>))}
        </article>
        </div>
    )
}