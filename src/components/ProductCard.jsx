export const ProductCard=({ product: { type, brand, size, price,image } })=>{
    
    return (
        <div>
            <div className="image-card-wrapper outlined product-card-styled">
                <div className="card-image greater-height">
                    <img className="product-image"
                    src={image}
                    alt="product"
                    />
                </div>
                <div className="product-details-wrapper">
                <p className="strong">{brand}</p>
                <p>{type}</p>
                <p>
                    <span className="strong">Rs{price} </span>
                    <br/>
                    {size}
                </p>
                </div>
            </div>
        </div>
    )
}