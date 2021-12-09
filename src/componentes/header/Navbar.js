import React from 'react'
import CartWidget from './CartWidget';
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className="navbar">
                    <li className="navbar-list"><a href="#">Procesadores</a></li>
                    <li className="navbar-list"><a href="#">Placas de video</a></li>
                    <li className="navbar-list"><a href="#">Perifericos</a></li>
                    <li className="navbar-list"><a href="#">Gabinetes</a></li>
                    <li id="navCart"><CartWidget /></li>
                </ul>                                
            </nav>
        </>
    );
}


