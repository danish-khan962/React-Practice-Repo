import React from 'react'
import { useState , useEffect } from 'react';

const FetchDataEffect = () => {
    const [posts,setPosts] = useState([]);

    useEffect( () => {
        async function fetchingData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        }
        fetchingData();
    }, []);

    
  return (
    <div>
        {posts.length > 0 ? <h2>{posts[0].title}</h2>  : <p>Loading....</p>}
     </div>
  )
}

export default FetchDataEffect
