import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let DialogData = [
  {id: 1, name: "Paul"}, 
  {id: 2, name: "Ivan"}, 
  {id: 3, name: "Artyom"},
  {id: 4, name: "Dmitry"}]


let MessagesData = [
  {id: 1, text: "Hello"}, 
  {id: 2, text: "How are you?"}]


let PostData = [
  {id:1, text:"1 post", likescount:1},
  {id:2, text:"2 post", likescount:10},
  {id:3, text:"3 post", likescount:0}] 

ReactDOM.render(
  <React.StrictMode>
    <App DialogData={DialogData} MessagesData={MessagesData} PostData = {PostData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
