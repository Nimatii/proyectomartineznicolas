import React from 'react'

import "./item.css"


const Item=({item}) =>{
    return (
        <div >
            <div className='container'>
                <h3>{item.nombre}</h3>
                <img src={item.imagen} alt="Imagen" />
                <p>${item.precio}</p>
                <button>ver detalle</button> 
            </div>           
        </div>
    )
}

export default Item;