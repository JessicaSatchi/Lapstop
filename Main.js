import React from 'react';
import main_img from '../main2.png';
import '../App.css';



function Body() {
  return (
    <div className="main">
        <div className="main_text">
        <img src={main_img} className="main_img" />
          <button className='getstartedbtn'> Get Started </button>
            <h1>
              BEST APP OF THE YEAR
            </h1>
            <h2>
              Create a space to power your productivity and induce the best you.
            </h2>
        </div>
    </div>
  )
}

export default Body