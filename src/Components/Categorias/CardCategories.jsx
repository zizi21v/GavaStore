

export function Cards (props) {
    const {image, name, price, }  = props
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