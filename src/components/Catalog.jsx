import products from '../data/products.json';

export const catalog=()=>{
    return (
        <div className="catalog">
            {
                products.map(productos=>{
                    return(
                        <div className='card'>
                            {productos.name}
                            {productos.material}
                            {productos.precio}
                        </div>
                    )
                })
            }
        </div>
    )

}
