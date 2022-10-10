import React from 'react';
import logo from '../images/meme-logo.png'

export default function Header(){

    return(
        <header className="header">
            <img src={logo} alt="Logo" className="header--img" />
            <h2  className="header--title" >Meme Generator</h2>
            <h4  className="header--description" >React Project</h4>
        </header>
    )
}