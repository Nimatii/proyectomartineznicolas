import React from 'react'

import "./itemDetail.css"

const ItemDetail = ({producto}) => {
    console.log(producto)
    return (
        <div className='containerDetalle'>
            <div>
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen} alt="Imagen" />
                <p>${producto.precio}</p>
                <p>{producto.detalle}</p> 
            </div>           
        </div>
        
    )
}

export default ItemDetail
