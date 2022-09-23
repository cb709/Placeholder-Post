import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

function Posts () {
    const [posts, setPosts] =  useState([])
    const [postCount, setPostCount] = useState(5)
    
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then (res => res.json())
        .then( data => setPosts(data))
    },[])

    function showMorePost () {
        setPostCount(postCount + 5)
    }

    return (
        <div>
           <div className="post-container">
                {
                    posts.slice(0,postCount).map(e => <Post key={e.id}  data={e}></Post>)
                }
           </div>
           <div className="load-more">
            <button onClick={showMorePost}>Load More</button>
           </div>
        </div>
    );
};

export default Posts;