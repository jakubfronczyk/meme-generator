import React from 'react';
import Header from './components/Header.js'
import Meme from './components/Meme.js'
// import logo from './images/meme-logo.png'

function App() {


  // PRACTICE
  // function handleClick(){
  //   alert('I was clicked')
  // }

  // function onImgOver(){
  //   alert ('Ups you just mouse over on the image')
  // }

  return (
    <>
      <Header />
      <Meme />
    </>
    //  /* PRACTICE */
    // <div className="container">
    //   <img onMouseOver={onImgOver} src={logo} alt="logo" />
    //   <button onClick={handleClick} >CLICK ME</button>
    // </div>

    
  );
}

export default App;
