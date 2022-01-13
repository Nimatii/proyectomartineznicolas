import React from 'react'
import CartWidget from './CartWidget';
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom';


const Navbar = ({links}) => {

    
    return (        
            <nav>
                <ul className="navbar">
                    {links.map((elemento, indice)=>{
                        return <li className="navbar-list">
                                <Link key={elemento.id} to={elemento.href}>{elemento.name}</Link>
                                </li>
                    })}
                    <li id="navCart">
                    <NavLink to="Carrito"><CartWidget /></NavLink>   

                    </li>
                </ul>                                
            </nav>
    );
}

export default Navbar

