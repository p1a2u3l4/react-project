import React from 'react';
import './Dialogs.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message'


const Dialogs = (props) => {

    let DialogElements = props.first.map( (dialog) => <Dialog name={dialog.name} id={dialog.id}/>)
    let MessagesElements = props.second.map( (singlemess) =>  <Message text={singlemess.text} id={singlemess.id}/>)

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