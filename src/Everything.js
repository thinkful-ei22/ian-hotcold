import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Header from './Header.js';
import CenterBox from './CenterBox.js';

export default function Everything() {
    return (
        <div>
        <div>
            < NavBar />
        </div>
        <div>
            < Header />
        </div>
            < CenterBox />
        </div>
    )
};