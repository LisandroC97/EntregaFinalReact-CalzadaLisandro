import { Container, Table, Button } from "react-bootstrap";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart=()=>{

    const {items}=useContext(CartContext)
    const totalCarrito=()=>items.reduce((accumulator,current)=>accumulator+current.quantity*current.price,0)


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
                    <td><Button variant="warning">Eliminar producto</Button></td>
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
        <div style={{width:"100%",marginLeft:"26 rem"}}>
        <Button variant="dark" style={{width:"40%"}}>Vaciar Carrito</Button>
        <br/>
        <br/>
        <Button variant="warning" style={{width:"40%"}}>Finalizar Compra</Button>
        </div>
        </Container>
    )

}