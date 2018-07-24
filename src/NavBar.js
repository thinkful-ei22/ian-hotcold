import React, { Component } from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="navitem"><a href="#">What?</a></li>
                <li className="navitem"><a href="#">+ New Game</a></li>
            </ul>
        </nav>
    )
}


