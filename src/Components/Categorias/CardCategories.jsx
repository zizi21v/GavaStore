
import React, { useState, useContext } from "react";
import { TYPES } from "../Cart/ShoppingActions"
import {CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

export function Cards (props) {

   
    const { data, Quantity } = props;
    const [state, dispatch] = useContext(CartContext);
    let {id,image,name,price}  = data ;
    
    const [num, setNum] = useState(state.cart.Quantity === undefined ? 0:state.cart.Quantity);
    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
      };
    return (
        <div className="productCard">
            <div className="productImage">
               <Link to={'/product/'+ id}>  <img src= {image}  alt={'img'+name} /> </Link>
                </div>
        <div className="productInfo">
            <h1 className="Namecard">{name}</h1>
            <p className="Pricecard">{'PRECIO:'+ price}</p>
        </div>
        <p className="Transparent">{Quantity === undefined ? num:Quantity}</p>
        <button className="ButtonP"  onClick={() => {
    addToCart(id)
    setNum(num + 1);
  }} >Agregar a el Carrito</button>
        </div>
    )
} 



