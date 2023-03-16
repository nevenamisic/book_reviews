import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { FaStar } from 'react-icons/fa';

function BlogDetails() {

const { id } = useParams(); 
const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
const navigate = useNavigate()

const handleDelete = () => {
  fetch('http://localhost:8000/blogs/' + id, {
    method: 'DELETE'
  })
  .then(() => {
    navigate('/')
  })
}

  return (
    <div className='blog-details'>
        { isLoading && <div>Loading...</div> }
        { error && <div>{error}</div> }
        { blog && (
            <div>
                <h2>{blog.title}</h2>
                <h4>{blog.author}</h4>
                <h3>Genre: {blog.genre}</h3>
                <h5>Rating: <FaStar className='yellow' /> {blog.rating} </h5>
                <span>
                  <img src={blog.img} alt="img"/>
                  {blog.body}
                </span>
                <p>Written by {blog.written}</p>
                <button onClick={handleDelete}>Delete Blog</button>
            </div>
        )}
    </div>
  )
}

export default BlogDetails;