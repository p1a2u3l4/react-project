import React from 'react'
import Myposts from '../Posts/MyPosts'
import './Main.css'




const Main = (props) => {
    return(
      <div className="main">
        
        <div className="profilename">
          <div className="avatar"><img src="https://i.stack.imgur.com/uLdOr.png"></img></div>
          <div className="name_surname"><h2>Paul Silev</h2></div>
        </div>

        <div className="posts">
            <div className="new_post">
              <textarea></textarea>
              <button className="addpost_button">Add post</button>
            </div>
            <div className="old_posts">
              <Myposts PostData={props.PostData}/>
            </div>
        </div>
      </div>
    )
}

export default Main