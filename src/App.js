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


const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className="App app-wrapper">
        <Header />
        <Nav />
        <Route path="/Messanger" render={() => <Dialogs first={props.DialogData} second={props.MessagesData}/>}/>
        <Route path="/Profile" render={() => <Main PostData={props.PostData}/>}/>
        <Route path="/News" render={() => <News/>}/>
        <Route path="/Photos" render={() => <Photos/>}/>
        <Route path="/Settings" render={() => <Settings/>}/>
      </div>
    </BrowserRouter> 
  );
}

export default App;