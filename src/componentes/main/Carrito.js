import { useContexto } from "./CarritoContext"

const Carrito = () => {

    const {carrito, precio_carrito, clear} = useContexto()

    const borrar = () =>{
        clear()
    }
    
    return (
        <div>
            {carrito.length > 0 ?  <><ul>
                {carrito.map((producto,indice)=>{
                    return <li key={indice}>
                        {producto.nombre}  Precio:${producto.precio} Unidades:{producto.cantidad} <button onClick={clear}> Borrar</button>
                    </li>
                })}
                
            </ul>
            <p>El precio total de su compra es de ${precio_carrito}</p></>
             : <p>No hay productos en el carrito</p>}
            
        </div>
    )
}

export default Carrito


