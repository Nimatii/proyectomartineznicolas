import { useState, useContext, createContext } from "react";

const contexto = createContext()

export const{Provider} = contexto

export const useContexto = () =>{
    return useContext(contexto)
}



const CustomProvider= ({children}) =>{

    const [cantidad_carrito, setCantidadCarrito] = useState(0)
    const [carrito, setCarrito] = useState([])
    const array = [carrito]

    const prueba =() =>{
        setCantidadCarrito(10)
    }
    

    const addItem = (item, quantity) =>{
        if(isInCart()){
            


        }else{
            
            array.push(item,quantity)
            setCarrito(array)
        }
    }

    const removeItem = (id) =>{}

    const clear=() => {setCarrito([])}

    const isInCart = (id) =>{
        return carrito.find(item => item.id === id)

    }

    const valorDelContexto ={
        removeItem,
        clear,
        isInCart,
        cantidad_carrito,
        carrito,
        prueba
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider