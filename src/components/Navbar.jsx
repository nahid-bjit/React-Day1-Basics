// src/components/Navbar.js
import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>BookLeaf</h1>
                <ul className="nav-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Books</Link>
                    </li>
                    <li>
                        <Link to="/user/create">Sign-up</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
