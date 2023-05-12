import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';


function BlogList({blogs}){
  
  return (
    <div className="blog-list">
         {blogs && blogs.map((blog) => (
            <div className='blog-preview' key={blog.id}>
              <Link to={`/blogs/${blog.id}`}> 
                  <h2>{blog.title}</h2>
                  <p className='author'>{blog.author}</p>
                  <p className='genre'>Genre: {blog.genre}</p>
                  <p>{blog.written}</p>
                  <p>Rating: <FaStar className='yellow' /> {blog.rating} </p>
              </Link>
                  <img src={blog.img} alt="img" />
            </div>
        ))}
    </div>
  )
}

export default BlogList