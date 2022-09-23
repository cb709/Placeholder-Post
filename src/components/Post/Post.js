import React from 'react';
import "./Post.css"

const Post = (props) => {
    return (
        <div className='post-card'>
            <h4>{props.data.id}. {props.data.title}</h4>
            <p>{props.data.body}</p>
        </div>
    );
};

export default Post;