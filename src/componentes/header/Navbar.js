import React from 'react'
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
                </ul>
            </nav>
        </>
    );
}


