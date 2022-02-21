
import "./Cart.css"

export function ShoppingCard (props) {

   
    const { data } = props;
    let {image,name,price}  = data ;
    
     return(
        <div className="ShoppingCard">
               <img  
              className="ImageShopping" src= {image}  alt={'img'+name} />
              <h1 className="NameShopping" >{name} {'Precio:$' + price}</h1>
        </div>
    )
} 
