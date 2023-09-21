import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item=({product})=>
(
<Card key={product.id} style={{ width: '14rem', margin:'15px'}}>
<Card.Img variant="top" src={product.img}/>
<Card.Body>
<Card.Title>{product.name}</Card.Title>
<Card.Text>
    {product.material}
</Card.Text>
<Card.Text>
    {product.precio}
</Card.Text>
<Link to={`/item/${product.id}`}>
<Button variant="secondary">Ver detalle</Button>
</Link>
</Card.Body>
</Card>
)