import React from 'react'
import Post from './Post.jsx'

let PostData = [
    {id:1, text:"1 post", likescount:1},
    {id:2, text:"2 post", likescount:10},
    {id:3, text:"3 post", likescount:0}
] 

let AllPosts = PostData.map( (p) => <Post text={p.text} likescount={p.likescount} id={p.id}/>)

const Myposts = (props) => {
    return(
        <div>
            {AllPosts}
        </div>
    )
}

export default Myposts