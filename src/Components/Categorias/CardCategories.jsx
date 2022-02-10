

export function Cards (props, {addToCart} ) {
    const {data} = props
    let {id,image,name,price}  = data
    return (
        <div className="productCard">
            <div className="productImage">
                <img src= {image} alt={'img'+name} />
                </div>
        <div className="productInfo">
            <h1 className="Namecard">{name}</h1>
            <p className="Pricecard">{price}</p>
        </div>
        <button onClick={()=> addToCart(id)}>Agregar a el Carrito</button>
        </div>
    )
} 
 
export function Cardsincard (props) {
    const {data} = props
    let {image,name,price}  = data
    return (
        <div className="productCard">
            <div className="productImage">
                <img src= {image} alt={'img'+name} />
                </div>
        <div className="productInfo">
            <h1 className="Namecard">{name}</h1>
            <p className="Pricecard">{price}</p>
        </div>
        </div>
    )
}  