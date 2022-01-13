import { useState, useContext, createContext } from "react";

const contexto = createContext()

export const{Provider} = contexto

export const useContexto = () =>{
    return useContext(contexto)
}



const CustomProvider= ({children}) =>{

    const [precio_carrito, setPrecioCarrito]  = useState(0)
    const [cantidad_carrito, setCantidadCarrito] = useState(0)
    const [carrito, setCarrito] = useState([])
    


    const addItem = (producto, cantidad) =>{
        console.log('asd')
        console.log(producto,cantidad)
        
            
            const copia= {...producto}
            copia.cantidad = cantidad
            
            setCarrito([...carrito,copia])

            setCantidadCarrito(cantidad_carrito + 1)
            setPrecioCarrito(precio_carrito + (producto.precio * cantidad))
        
    }

    const removeItem = (nombre) =>{

        setCarrito(carrito.filter(producto => producto.nombre !== nombre))
    }

    const clear=() => {
        setCarrito([])
        setPrecioCarrito(0)
        setCantidadCarrito(0)
    }

    const isInCart = (nombre) =>{
        return carrito.find(producto => producto.nombre === nombre)

    }

    const valorDelContexto ={
        removeItem,
        clear,
        isInCart,
        addItem,
        cantidad_carrito,
        precio_carrito,
        carrito
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider