import { useState } from "react";
import { Button } from "react-bootstrap";

export const ItemCount =({onAdd, stock})=>{
    const [count, setCount]=useState(1);
    const handleDecreaseCount =()=>{
        if (count > 1)
        {
        setCount((prev)=> prev -1)
        }
    }
    const handleIncreaseCount =()=>{
        if (stock>count)
        {
        setCount((prev)=> prev+1)
        }
    }

return (
    <div className="itemCount">
        <Button variant="dark" onClick={handleDecreaseCount}>-</Button>
        <span style={{padding:"30px"}}>{count}</span>
        <Button variant="dark" onClick={handleIncreaseCount}>+</Button>
        <Button variant="dark" onClick={()=>onAdd(count)} style={{marginLeft:"10px"}}>Agregar al carrito</Button>
    </div>
    
)
};