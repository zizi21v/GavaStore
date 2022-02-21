
import {  useContext, useState } from "react";
import { ShoppingCard } from "./Shoppingcard";
import {CartContext} from "../Context/CartContext";
import './Cart.css'

export const ShoppingCart = () => {
  const [state] = useContext(CartContext);
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const getTotal = () => {
    let total = 0;
    state?.cart?.map((val) => {

      for(let i = 0; i < val.Quantity; i++) {
        const product = state.products.find((item) => item.id === val.id)
        total += product.price;
      }
      return val
    })
    return total;
  }
  

  
  return (
  <div className="Shopping-cart">
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
     
  
     <div className="total-form">
     <p className="total">Total=$ {getTotal()}</p>
     <input 
       onChange={(e) => setNombre(e.target.value)}
       value={nombre}
       placeholder="Nombre"
     />
     <input 
       onChange={(e) => setDireccion(e.target.value)}
       value={direccion}
       placeholder="Dirección"
     />
     <button onClick={() => {
       const pedido = state?.cart?.map((val) => {
         const product = state.products.find((item) => item.id === val.id)
         return `${val?.Quantity} ${product?.name} Precio=$ ${product?.price}`
       })

       const text = encodeURI(`Hola, mi nombre es ${nombre}, dirección: ${direccion} y mi pedido es: ${pedido.join()}`)

       const whatsappUrl = `https://wa.me/584143057366?text=${text}`
       window.open(whatsappUrl, '_blank');

     }} className="buttonBuy">Realizar pedido</button>
   </div>
   
 </div>
   </div>
    
);
}; 

