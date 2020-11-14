import React from 'react'
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {

    return(
        <div className="sender_name"><NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

export default Dialog