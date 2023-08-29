import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import data from '../data/products.json';
import { ItemList } from "./ItemList";
import {useParams} from "react-router-dom";

export const ItemListContainer=(props)=>
{
    const [products, setProducts]=useState([]);
    const {id}=useParams();
    console.log(id)
    useEffect(()=>{
        const promise = new Promise((resolve,reject)=>{setTimeout(()=>resolve(data),1500);
        });
        promise.then(data=>
            {
                if(!id){
                setProducts(data)}
                else {
                    const productsFiltered = data.filter(product => product.category === id);
                    setProducts(productsFiltered);
                }
            })
            
    },[]);
    
    return (
        
        <Container className="mt-4" >
        <h1>{props.greeting}</h1>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <ItemList products={products}/>
        </div>
        </Container>
        
    )
}