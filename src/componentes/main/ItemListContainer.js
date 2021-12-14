import React from "react";
import ItemCount from "./ItemCount";

import "./itemlistcontainer.css"



//COMPONENTES



const ItemListContainer = (props) =>{
    
    const onAdd = () =>{
        alert("perdon, no entendi bien que hacia esta funcion y lo del callback")
    }
    
    return (<>
        <div>
            <h1>Bienvenido/a a nuestra tienda {props.nombre}</h1>
        </div>
        <div>
            <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default ItemListContainer;