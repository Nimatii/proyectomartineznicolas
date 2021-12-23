import React from 'react'
import { NavLink } from 'react-router-dom'

import "./item.css"


const Item=({item}) =>{
    return (
        <div >
            <div className='container'>
                <h3>{item.nombre}</h3>
                <img src={item.imagen} alt="Imagen" />
                <p>${item.precio}</p>
                <NavLink to={item.link} ><button>ver detalle</button></NavLink>
            </div>           
        </div>
    )
}

export default Item;
