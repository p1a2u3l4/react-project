import React from 'react';
import './Dialogs.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message'


const Dialogs = (props) => {

    let DialogElements = props.state.DialogData.map( (dialog) => <Dialog name={dialog.name} id={dialog.id}/>)
    let MessagesElements = props.state.MessagesData.map( (singlemess) =>  <Message text={singlemess.text} id={singlemess.id}/>)

    let NewMessRef = React.createRef();
    let AddMessage = () => {
        let Text = NewMessRef.current.value;
        alert(Text); 
    }

    return (
        <BrowserRouter>
        <div className="dialogs">
            <div className="dialog_names">
              {DialogElements}
            </div>
            <div className="messages">
                {MessagesElements}


              <div className="Newmessage">
                <textarea ref={NewMessRef}></textarea>
                <button onClick={AddMessage} className="Addmessagebutton">Send Message</button>
              </div> 
            </div> 
                     
        </div>
        </BrowserRouter>
    )
}

export default Dialogs;