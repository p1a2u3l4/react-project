import React from 'react'

const Friend = (props) => {
    return(
        <div className="single_friend">
            <div className="friend_avatar" ><img src={props.ava}></img></div>
    <div className="friend_name">{props.name}</div>
        </div>
    )
}

export default Friend