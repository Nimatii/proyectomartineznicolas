import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import "./itemlistcontainer.css"



const listaDeProductos=[
    {nombre:'Monitor', precio:20000, imagen:'/assets/IMonitor.png', categoria:'Monitores', link:'/producto/Monitor'},
    {nombre:'Mouse', precio:5000, imagen:'/assets/IMouse.png', categoria:'Perifericos', link:'/producto/Mouse'}, 
    {nombre:'Teclado', precio:10000, imagen:'/assets/ITeclado.png', categoria:'Perifericos', link:'/producto/Teclado'}
]


const ItemListContainer = (props) =>{
    
    let [lista, setLista] = useState([])
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        const promesa = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(listaDeProductos)
            },2000)
        })

        promesa.then((productos)=>{
            setLista(productos)
        })

    }, [id]) 



    
    
    return (<>
        <div>
            <h1>Bienvenido/a a nuestra tienda {props.nombre}</h1>
        </div>
        <ItemList lista={lista} categoria={id}/>
        </>
    )
}

export default ItemListContainer;