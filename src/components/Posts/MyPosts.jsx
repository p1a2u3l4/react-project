import React from 'react'
import Post from './Post.jsx'


const Myposts = (props) => {

    let AllPosts = props.PostData.map( (p) => <Post text={p.text} likescount={p.likescount} id={p.id}/>)
    return(
        <div>
            {AllPosts}
        </div>
    )
}

export default Myposts