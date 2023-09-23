import { createContext, useState } from "react";

export const CartContext = createContext([])
export const CartProvider=({children}) => {
    const [items, setItems]=useState([])
    const addItem= (product, quantity) => 
    {   if(items?.some((itemToBuy)=>itemToBuy.id===product.id))
            {  
                let index=items.findIndex(indexItem => indexItem.id === product.id);
                console.log("index",index)
                items[index].quantity+=quantity;
                }
        
        else{
            setItems(prev=>[...prev,{...product,quantity}])
        }
    }
    const removeItem=id=>{
        const itemsFiltered=items.filter(item=>item.id!==id)
        setItems(itemsFiltered)
    }
    const clear=()=>setItems([])
    console.log(items)
    const totalWidget= items.reduce((sum,value)=>sum + value.quantity,0)
    return (
        <CartContext.Provider value={{items, addItem,removeItem,clear,totalWidget}}>
        {children}
        </CartContext.Provider>)
}