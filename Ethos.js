import React from 'react';
import "../App.css";
import balanced from '../ethos3.png';
import connected from '../ethos2.png';
import organised from '../ethos1.png';

 

function Ethos () {
  return (
      <div className='information'>
        <div className='solid_line_1'>
        </div>
          <img src={organised} className="organised" />
          <h1 className='textone'>Connecting your information to keep you up to date.</h1>
          <img src={connected} className="connected"/>
          <h1 className='texttwo'>Taking the load off with our organisational tools.</h1>
          <img src={balanced} className="balanced"/>
          <h1 className='textthree'>A safe space for independent professionals during stressful time.</h1>
      </div>

    )
  
  }
  
   
  
 

 

export default Ethos;