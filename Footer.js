
import React from 'react';
import "../App.css";
import flogo from '../footerlogo.png';

 

function Footer () {

  return (
    <div className='footer'>
      <div className='upper_footer'>
        <img src={flogo} className="footer-logo" />
        <div className='box_1'>
          <h4>Lapstop</h4>
        </div>
        <div className='box_2'>
          <h4>Apps</h4>
          <p1>Download the App! </p1>
        </div>
        <div className='box_3'>
          <h4>Contact Us</h4>
          <p1>Contact us through email!</p1>
        </div>
        <div className='box_4'>
          <h4>Jobs</h4>
          <p1>Join the community!</p1>
        </div>
      </div>
      <div className='solid_line_2'>
      </div>
      <div className='lower_footer'>
        <div className='language'>
          <h1>English</h1>
        </div>
        <div className='terms'>
          <h1>Terms & Privacy</h1>
        </div>
        <div className='lapstop'>
          <h1>@2022 Lapstop Inc.</h1>
        </div>
      </div>
    </div>
  )

}

export default Footer