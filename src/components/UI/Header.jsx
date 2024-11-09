import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header" >
            <div className="logo">
                <h1>WC 2026</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Groups" activeClassName="active">Groups</NavLink>
                    </li>
                        <li>
                        <NavLink to="/picks" activeClassName="active">Picks</NavLink>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;