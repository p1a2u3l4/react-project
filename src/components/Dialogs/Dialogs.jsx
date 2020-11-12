import React from 'react';
import './Dialogs.css';
import {BrowserRouter, NavLink} from 'react-router-dom'


const Dialog = (props) => {
    return(
        <div className="sender_name"><NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}


const Message = (props) => {
    return(
        <div className="message">{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <BrowserRouter>
        <div className="dialogs">
            <div className="dialog_names">
              <Dialog name="Paul" id="1"/>
              <Dialog name="Ivan" id="2"/>
              <Dialog name="Artyom" id="3"/>
              <Dialog name="Dmitry" id="4"/>
            </div>
            <div className="messages">
                <Message text="Hello"/>
                <Message text="How are you?"/>
            </div>           
        </div>
        </BrowserRouter>
    )
}

export default Dialogs;