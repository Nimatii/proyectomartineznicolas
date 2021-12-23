import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

import { useState, useEffect } from "react";

const productoInicial=
    {nombre:'Monitor', precio:20000, imagen:'.../media/IMonitor.png', detalle:"Especificaciones : Pantalla Tamaño de pantalla (clase)24 Plana/CurvaPlano Tamaño de pantalla activa (HxV) (mm)527.04 x 296.46"}


const ItemDetailContainer = () => {
    let [producto, setProducto] = useState({})
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        const promesa = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(productoInicial)
            },2000)
        })

        promesa.then((productos)=>{
            setProducto(productos)
        })

    }, [id])

    console.log(producto)
    
    return (
        <div>
            <ItemDetail producto={producto} id={id}/>
        </div>
    )
}

export default ItemDetailContainer

