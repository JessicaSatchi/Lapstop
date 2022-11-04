import React from 'react';
import logo from '../logo.png';
import '../App.css';


function Navbar() {
    return (
       
    <div className="header">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <button className="Features">Features</button>
        <button className="Insights">Insights</button>
        <button className="Resources">Resources</button>
        <button className="Login">Log In</button>
        
      </header>
    </div>
        
    )
  
}

export default Navbar;