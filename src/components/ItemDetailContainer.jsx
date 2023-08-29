import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { ItemDetail } from "./ItemDetail";
import data from '../data/products.json';


export const ItemDetailContainer=(props)=>
{
    const [product, setProduct]=useState(null);
    const {id}=useParams();
    useEffect(()=>{
        const promise = new Promise((resolve,reject)=>{setTimeout(()=>
        { 
            const productById=data.find((product)=>product.id===id)
            resolve(productById);},1500);
    
        });
        promise.then(data=>{
            setProduct(data)})
        
    },[]);
    
    if (!product) return <div>Loading...</div>
    return (
        
        <Container className="mt-4" >
        <ItemDetail product={product}></ItemDetail>
        </Container>
        
    )
}