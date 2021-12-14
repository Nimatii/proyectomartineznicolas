import React from 'react'
import { useState } from 'react'

import "./itemCount.css"

export default function ItemCount(props) {
    
    const [count, setCount] = useState(0)
    
    const sumar=() =>{
        if(count < (props.stock))
        {setCount(count + 1)}
    }

    const restar=() =>{
        if(count > 0)
        {setCount(count - 1)}
    }
    
    
    
    return (
        <div className='container'>
            <div id='contador'>
                <button onClick={restar}>-</button>            
                <p>{count}</p>
                <button onClick={sumar}>+</button>            
            </div>
            <div id="confirmar">
                <button onClick={props.onAdd}>Confirmar</button>
            </div>
        </div>
    )
}
