import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlog } from '../hooks'
import DisplayBlog from '../components/DisplayBlog'



const Blog = () => {
  const {id} = useParams() 
  const {blog, loading} = useBlog({
    id: id || ""
  })

  if(loading || !blog){
    return <div>
      loading...
    </div>
  }

  return (  
    <div>
      <DisplayBlog blog={blog}/> 
    </div>
  )
  
}

export default Blog