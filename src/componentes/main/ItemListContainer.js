import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import "./itemlistcontainer.css"



const listaDeProductos=[
    {nombre:'Monitor', precio:20000, imagen:'../media/IMonitor.png'},
    {nombre:'Mouse', precio:5000, imagen:'../media/IMouse.png'},
    {nombre:'Teclado', precio:10000, imagen:'../media/ITeclado.png'}
]


const ItemListContainer = (props) =>{
    
    let [lista, setLista] = useState([])

    useEffect(() => {
        const promesa = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(listaDeProductos)
            },2000)
        })

        promesa.then((productos)=>{
            setLista(productos)
        })

    }, [])



    
    
    return (<>
        <div>
            <h1>Bienvenido/a a nuestra tienda {props.nombre}</h1>
        </div>
        <ItemList lista={lista}/>
        </>
    )
}

export default ItemListContainer;