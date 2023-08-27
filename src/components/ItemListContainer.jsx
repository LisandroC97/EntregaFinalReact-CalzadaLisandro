import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data/products.json';

export const ItemListContainer=(props)=>
{
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        const promise = new Promise((resolve,reject)=>{setTimeout(()=>resolve(data),1500);
        });
        promise.then(data=>setProducts(data))
        
    },[]);
    console.log(products)
    return (<Container className="mt-4">
        <h1>{props.greeting}</h1>
        <div>
            {products.map(product=>(
                <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.material}
                    </Card.Text>
                    <Card.Text>
                        {product.precio}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito
                    </Button>
                    </Card.Body>
                </Card>
            )
            )}
        </div>
        </Container>
    )
}