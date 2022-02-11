import React,{ useContext, useState } from "react";
import { TYPES } from "../Cart/ShoppingActions";
import { CartContext } from "../Context/CartContext";
import "./Products.css"


export function ProductsCards (props) {
    const { data, Quantity } = props;
 const [ state,dispatch] = useContext(CartContext);
    const {id,image,name,price,size,care,material}  = data;
    const [num, setNum] = useState(state.cart.Quantity === undefined ? 0:state.cart.Quantity);
  const addToCart = (id) => {
      dispatch({ type: TYPES.ADD_TO_CART, payload: id })};
    return (
        <div className="Product-Container">
            <div >
                <img className="ProductImage" src= {image} alt={'img'+name} />
                </div>
        <div className="ProductInfo">
            <h1 className="Titulos">{name}</h1>
             
            <p className="Titulos">{'PRECIO:' + price}</p>
            
            <p className="Titulos">{ 'Talla:'+size}</p>
            
            <p className="Titulos">{'CUIDADOS:'+ care}</p>
            
            <p className="Titulos">{'MATERIAL:' + material}</p>
            <p className="Transparent">{Quantity === undefined ? num:Quantity}</p>
        <button className="ButtonP" onClick={() => {
    addToCart(id)
    setNum(num + 1);
  }} >Agregar a el Carrito</button>
        </div>
        </div>
    )
}  