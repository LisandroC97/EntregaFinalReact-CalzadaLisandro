import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/CartContext";
export const ItemDetail=({product})=>
{   const { addItem }=useContext(CartContext)
    const onAdd=count=>addItem(product,count);
    return    (
        <div>
        <h3>{product.name}</h3>
        <h4>{product.material}</h4>
        <img src={product.img} alt="" style={{height:"350px"}}/>
        <h4>Precio unitario: ${product.price}</h4>
        <ItemCount stock={product.stock} onAdd={onAdd}/>
        </div>
    )
}