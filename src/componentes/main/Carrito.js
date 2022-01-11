import { useContexto } from "./CarritoContext"

const Carrito = () => {

    const {carrito, clear,removeItem} = useContexto()
    
    return (
        <div>
            <p>Todavia no tengo Carrito</p>
        </div>
    )
}

export default Carrito


