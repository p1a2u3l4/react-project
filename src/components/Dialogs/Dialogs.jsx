import React from 'react';
import './Dialogs.css';
import {BrowserRouter, NavLink} from 'react-router-dom';



let DialogData = [
    {id: 1, name: "Paul"}, 
    {id: 2, name: "Ivan"}, 
    {id: 3, name: "Artyom"},
    {id: 4, name: "Dmitry"}]


let MessagesData = [
    {id: 1, text: "Hello"}, 
    {id: 2, text: "How are you?"}]


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