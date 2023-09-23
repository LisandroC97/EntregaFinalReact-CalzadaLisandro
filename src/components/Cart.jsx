import { Container, Table, Button, Form} from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';



    export const Cart =() => {
        const {items, removeItem,clear} = useContext(CartContext)
        const [formValues,setFormValues]=useState({
            name:"",
            phone:"",
            email:"",
        })
        const totalCarrito=() =>
            items.reduce(
                (acumulador, valorActual) =>
                    acumulador + valorActual.quantity * valorActual.price,
                    0
            )
            const handleChange =ev =>{
                setFormValues(prev=>({
                    ...prev,
                    [ev.target.name]:ev.target.value,
                }))
    
            }
                const sendOrder =()=>{
                    const order ={
                        buyer: formValues,
                        items,
                        total:totalCarrito(),
                    }
    
                    const db= getFirestore()
                    const orderCollection =collection(db,"orders")
                    addDoc(orderCollection, order).then(({id})=>{
                        if(id){
                            setFormValues({
                                name:"",
                                phone:"",
                                email:"",
                            })
                            clear()
                            alert("Su orden "+id+" ha sido completada con éxito!")
                        }
                    })
                }
    
    if (items.length===0) {
        
        return (
                    <Container style={{textAlign:"center"}}>

                        <br/>
                        <h4 class="h4estilo"> Ups! No hay nada por aquí</h4>
                        <br/>
                        <Button variant="dark">
                        <Link to="/" style={{textDecoration:"none", color:"white"}}>
                        <h4 class="h4estilo"> Volver al Inicio </h4>
                        </Link>
                        </Button>
                    </Container>)
            }
                else{
    
    return (<Container>
        <br></br>
        <h2>Carrito</h2>
        <br></br>
        <Table striped bordered variant="dark" style={{textAlign:"center"}}>
            <thead>
                <tr>
                    <th>Artículo</th>
                    <th>Material</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
                {items?.map(item=>{
                    return(
                    <>
                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.material}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td><Button variant="warning" onClick={()=>removeItem(item.id)}>Eliminar producto</Button></td>
                    </tr>
                    </>)
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${totalCarrito()}</td>
                </tr>
            </tfoot>
        </Table>
        <br/>
        <Button variant="dark" style={{width:"40%",marginLeft:"400px"}} onClick={clear}>Vaciar Carrito</Button>
        <br/>
        <br/>
        
        <Form>
                        <Form.Group classname="mb-3" controlId="formBasicEmail">
                            <Form.Label> Nombre </Form.Label>
                            <Form.Control
                            onChange={handleChange}
                            value={formValues.name}
                            type="text"
                            name="name"
                            // required
                            />
                        </Form.Group>
                        <Form.Group classname="mb-3" controlId="formBasicEmail">
                            <Form.Label> Email </Form.Label>
                            <Form.Control
                            onChange={handleChange}
                            value={formValues.email}
                            type="email"
                            name="email"
                            />
                        </Form.Group>
                        <Form.Group classname="mb-3" controlId="formBasicEmail">
                            <Form.Label> Teléfono </Form.Label>
                            <Form.Control
                            onChange={handleChange}
                            value={formValues.phone}
                            type="text"
                            name="Phone"
                            />
                        </Form.Group>
                        <Form.Group classname="mb-3" controlId="formBasicEmail">
                            <Form.Label> Dirección </Form.Label>
                            <Form.Control
                            onChange={handleChange}
                            value={formValues.residency}
                            type="text"
                            name="residency"
                            />
                        </Form.Group>
                    
                </Form>
        
        <br/>
        <br/>
        <Button variant="warning" style={{width:"40%",marginLeft:"400px"}}onClick={sendOrder}>Finalizar Compra</Button>


        </Container>
    )

}}