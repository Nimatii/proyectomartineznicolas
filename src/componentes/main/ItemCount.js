import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

import "./itemCount.css"

export default function ItemCount({onAdd}) {
    
    const [count, setCount] = useState(0)
    
    const sumar=() =>{
    
        setCount(count + 1)
    }

    const restar=() =>{
        if(count > 0)
        {setCount(count - 1)}
    }
    
    const agregarItem = () => {
        onAdd(count)
    }
    
    
    return (
        <>
            <div id='contador'>
                <button onClick={restar}>-</button>            
                <p>{count}</p>
                <button onClick={sumar}>+</button>            
            </div>
            <div id="confirmar">
            <NavLink to='/Carrito' ><button onClick={agregarItem}>Confirmar</button></NavLink>
            </div>
        </>
    )
}
