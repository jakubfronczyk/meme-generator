import React from 'react';
import memesData from '../memesData.js'


export default function Meme(){

    

    function randomMeme(){
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        console.log(url)
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>
                <input type="text" className="form--input" placeholder="Bottom text"></input>
                <button onClick={randomMeme} className="form--btn">Get a new meme image</button>
            </div>
        </main>
    )
}