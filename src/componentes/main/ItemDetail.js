import React from 'react'

import "./itemDetail.css"

const ItemDetail = ({producto, id}) => {
    if(producto.nombre === id){
        return (
        <div className='containerDetalle'>
            <div>
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen} alt="Imagen" />
                <p>${producto.precio}</p>
                <p>{producto.detalle}</p> 
            </div>           
        </div>
        
    )}
    else{
        return(<p></p>)
    }
    
}

export default ItemDetail
