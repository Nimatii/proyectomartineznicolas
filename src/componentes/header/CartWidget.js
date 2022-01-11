import React from 'react';
import { useContexto } from '../main/CarritoContext';


export default function CartWidget() {

    const {cantidad, prueba} = useContexto();

    prueba()

    console.log(cantidad)
    return (
        <div>
            <span class="material-icons">
                shopping_cart
            </span>     
            {cantidad}
        </div>
    )
}
