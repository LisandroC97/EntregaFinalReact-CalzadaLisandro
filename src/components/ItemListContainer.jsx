import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import {getFirestore,query, where, getDocs,collection} from "firebase/firestore" ;
export const ItemListContainer = props => {

        const [products, setProducts] = useState ([]); 
        const{id}=useParams();
        const db = getFirestore()
        
        useEffect (()=>{ 
        
            const refCollection = id? query(collection(db, "products"), where("category","==",id)): collection(db, "products")
            getDocs(refCollection).then (snapshot=>{
                if(snapshot.size===0) console.log("no results")
                else {
                    setProducts(
                        snapshot.docs.map(doc=>({
                            id:doc.id, ...doc.data(),
                        }))
                    )
                }
            })        
    }, [id]);
    return (
        <Container className="mt-4" style={{textAlign:"center"}} >
        <h1>{id}</h1>
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <ItemList products={products}/>
        </div>
        </Container>
    )
}