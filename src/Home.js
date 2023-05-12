import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'
import Genres from './Genres';

function Home() {
  
  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
  //radim destructuring i pisem url koji koristim u useFetch

  const [itemList, setItemList] = useState(blogs)

  useEffect(() => {
    blogs && setItemList(blogs)
  },[blogs])

  const filterItems = (genre) => {
    if (genre === 'all'){
      setItemList(blogs)
      return
    }
    const newItems = blogs.filter((blog) => blog.genre === genre)
    setItemList(newItems)
  }

  return (
    <div>
      <p className='subtitle'> Be free to share your own review of favorite books!</p>
      <Genres filterItems={filterItems}/>
      {error && <div className='loading-error'>{ error }</div>}
      {isLoading && <div className='loading-error'>Loading...</div>}
      {blogs && <BlogList blogs={itemList} title="All Reviews"/>} 
    </div>
  )
}

export default Home