import React, { useEffect, useState } from 'react'
import axios from 'axios'

const data ="https://jsonplaceholder.typicode.com/posts/2"

const Blog = () => {
  const [post, setPost]= React.useState(null)

 React.useEffect(()=>{
  axios.get(data).then((response)=>{
    setPost(response.data)
  })
 },[])
 if (!post) return null;
  return (


    <div className='max-w-container mx-auto'  >
       <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>

    
  )
}

export default Blog
