import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'


const App = () => {
  return (
    <div className="App-wrapper"> 
      <Header />   
      <Navbar />
      <Profile />      
    </div>   
  );
}




export default App;
