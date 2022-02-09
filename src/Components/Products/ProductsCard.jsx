export function ProductsCards (props) {
    const {image, name, price,size,care,material}  = props
    return (
        <div className="productCard">
            <div className="productImage">
                <img src= {image} alt={'img'+name} />
                </div>
        <div className="productInfo">
            <h1 className="Namecard">{name}</h1>
            <p className="Pricecard">{price}</p>
            <p className="Pricecard">{'Talla'+ size}</p>
            <p className="Pricecard">{'Cuidados'+ care}</p>
            <p className="Pricecard">{'Material'+ material}</p>

            
        </div>
        </div>
    )
}  