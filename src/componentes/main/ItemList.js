import React from 'react'
import Item from "./Item";
import "./itemList.css"


const ItemList=({lista, categoria}) =>{
    return (
        <div id='listContainer'>
            {lista.map((item, index)=>{
                console.log(categoria === undefined)
                if(categoria === undefined){
                    
                    return<Item key={index} item={item}/>
                    
                }
                else if(item.categoria === categoria){
                    return<Item key={index} item={item}/>
                }
                
            })}
        </div>
    )
}

export default ItemList;
