import React from 'react'
import {NavLink} from 'react-router-dom';

const Message = (props) => {
    return(
        <div className="message">{props.text}</div>
    )
}

export default Message