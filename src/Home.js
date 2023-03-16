import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

function Home() {
  
  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
  //radim destructuring i pisem url koji koristim u useFetch
  return (
    <div>
        <div className='subtitle'>
          <p>Be free to share your own review of favorite books!</p>
        </div>
      {error && <div>{ error }</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Reviews"/>} 
    </div>
  )
}

export default Home