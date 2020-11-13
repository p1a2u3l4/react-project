import React from 'react'

const Post = (props) => {
    return(
        <div className={props}>
            <h2>{props.text}</h2>
            <p>{"Likes" + " " + props.likescount}</p>
        </div>
    )
}

export default Post