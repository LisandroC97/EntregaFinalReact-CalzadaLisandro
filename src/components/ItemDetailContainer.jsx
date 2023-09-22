import { useState } from "react";
import {useParams} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { ItemDetail } from "./ItemDetail";
import {getFirestore,doc, getDoc} from "firebase/firestore" ;

export const ItemDetailContainer=(props)=>
{   const [product, setProduct]=useState([]);
    const {id}=useParams();

    const db=getFirestore();
    const refDoc=doc(db, "products",id);
    getDoc(refDoc).then((snapshot)=>{
        setProduct({id: snapshot.id, ...snapshot.data()});
    },[id])
    return (
        <Container className="mt-4" >
        <ItemDetail product={product}></ItemDetail>
        </Container>
    )
}