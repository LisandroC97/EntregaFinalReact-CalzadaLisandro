export const ItemDetail=({product})=>
    (
        <div>
        <h3>{product.name}</h3>
        <h4>{product.material}</h4>
        <img src={product.img} alt="" style={{height:"350px"}}/>
        <h4>Precio unitario: ${product.price}</h4>
        </div>
    )