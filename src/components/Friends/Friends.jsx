import React from 'react'
import Friend from './Friend/Friend'
import "./Friends.css"


const Friends = (props) => {
    let FriendsInfo = props.state.Friends.map((friend) => <Friend id={friend.id} name={friend.Name} ava={friend.avatar}/>)
    return(<div>
        {FriendsInfo}
    </div>)
}

export default Friends