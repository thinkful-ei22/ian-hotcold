import React, { Component } from 'react';
import './Form.css';

export default function Form() {
    return (
        <form className="form">
        <div>
            <input className="text" type="text" name="userGuess" placeholder="Enter your Guess"/>
        </div>
        <div>
            <input  className="button" type="submit" id="guessButton" value="Guess"/>
        </div>
        </form>
    )
}