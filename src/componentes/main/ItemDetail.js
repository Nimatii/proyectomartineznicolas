import React from 'react'
import ItemCount from './ItemCount'

import "./itemDetail.css"

const ItemDetail = ({producto, id}) => {

    const onAdd = (cantidad)=>{ 
        console.log("Cantidad de items seleccionados: " + cantidad)
    } 

    if(producto.nombre === id){
        return (
        <div className='containerDetalle'>
            <div>
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen} alt="Imagen" />
                <p>${producto.precio}</p>
                <p>{producto.detalle}</p> 
                <ItemCount onAdd={onAdd}/>
            </div>           
        </div>
        
    )}
    else{
        return(<p></p>)
    }
    
}

export default ItemDetail
