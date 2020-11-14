import React from 'react';
import './Dialogs.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message'


const Dialogs = (props) => {

    let DialogData = [
        {id: 1, name: "Paul"}, 
        {id: 2, name: "Ivan"}, 
        {id: 3, name: "Artyom"},
        {id: 4, name: "Dmitry"}]
    
    
    let MessagesData = [
        {id: 1, text: "Hello"}, 
        {id: 2, text: "How are you?"}]

    let DialogElements = DialogData.map( (dialog) => <Dialog name={dialog.name} id={dialog.id}/>)
    let MessagesElements = MessagesData.map( (singlemess) =>  <Message text={singlemess.text} id={singlemess.id}/>)
   

    return (
        <BrowserRouter>
        <div className="dialogs">
            <div className="dialog_names">
              {DialogElements}
            </div>
            <div className="messages">
                {MessagesElements}
            </div>           
        </div>
        </BrowserRouter>
    )
}

export default Dialogs;