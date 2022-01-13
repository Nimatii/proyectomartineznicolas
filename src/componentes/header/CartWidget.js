import React from 'react';
import { useContexto } from '../main/CarritoContext';


export default function CartWidget() {

    const {cantidad_carrito, prueba} = useContexto();


    return (
        <div>
            <span class="material-icons">
                shopping_cart
            </span>     
            {cantidad_carrito}
        </div>
    )
}
