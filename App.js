import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Main';
import './App.css';
import Bluebanner from './components/Bluebanner';
import Footer from './components/Footer';
import Ethos from './components/Ethos';




function App() {
  return (
    <div className="header">
     <Navbar/>
     <Banner/>
     <Bluebanner/>
     <Ethos/>
     <Footer/>
    </div>
  );
}
export default App;