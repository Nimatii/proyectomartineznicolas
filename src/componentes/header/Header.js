import React from "react";
import "./header.css"
import { NavLink } from "react-router-dom";



//COMPONENTES
import Navbar from "./Navbar";

const links =[
    {href:'/categoria/Monitores', name:'Monitores', id:1},
    {href:'/categoria/Placas-de-video', name:'Placas de video', id:2},
    {href:'/categoria/Perifericos', name:'Perifericos', id:3},
    {href:'/categoria/Gabinetes', name:'Gabinetes', id:4}
]

console.log(links)

function Header(){
    return (
        <div>
            <NavLink to="Inicio"><h1>PROYECTO MARTINEZ</h1></NavLink>
            <Navbar links={links}/>
        </div>
    )
}

export default Header;