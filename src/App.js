import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Main from './components/Profile/Main'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Photos from './components/Photos/Photos'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App app-wrapper">
        <Header />
        <Nav />
        <Route path="/Messanger" component={Dialogs}/>
        <Route path="/Profile" component={Main}/>
        <Route path="/News" component={News}/>
        <Route path="/Photos" component={Photos}/>
        <Route path="/Settings" component={Settings}/>
        {/*<Main/> */}
        {/*<Dialogs />*/}
      </div>
    </BrowserRouter> 
  );
}




export default App;
