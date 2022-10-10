import React from 'react';
import memesData from '../memesData.js'


export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState(memesData)

    function getMemeImg(){
        const memesArray = allMemeImage.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"></input>
                <input type="text" className="form--input" placeholder="Bottom text"></input>
                <button onClick={getMemeImg} className="form--btn">Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="Meme"/>
        </main>
    )
}