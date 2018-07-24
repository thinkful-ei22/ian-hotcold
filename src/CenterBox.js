import React, { Component } from 'react';
import Form from './Form.js';
import RedBox from './RedBox.js';
import GreenBox from './GreenBox.js';
import GuessCounter from './GuessCounter.js';
import './CenterBox.css';

export default function CenterBox(){
    return(
        <div className="centerBox">
            <div>
                < RedBox />
            </div>
            <div>
                < Form />
            </div>
            <div>
                < GuessCounter /> 
            </div>
            <div>
                < GreenBox />
            </div>
        </div>
    )
}; 