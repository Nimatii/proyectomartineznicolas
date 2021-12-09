import React from "react";

import "./itemlistcontainer.css"



//COMPONENTES



const ItemListContainer = (props) =>{
    return (
        <div>
            <h1>Bienvenido/a a nuestra tienda {props.nombre}</h1>
        </div>
    )
}

export default ItemListContainer;