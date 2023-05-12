import React, { useState } from 'react'
import  { useNavigate } from 'react-router-dom'

function Create() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [written, setWritten] = useState('')
  const [rating, setRating] = useState()
  const [img, setImg] = useState('')
  const [genre, setGenre] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author, written, rating, img, genre}

    setLoading(true) //kad stisnem submit neka mi pise adding blog dok se ne obavi post metod, i posle ga vrati na false-add blog

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog) 
      //kreiram post zahtev upucen end-point a to je url 
    })
    .then(() => {
      setLoading(false)
      navigate('/') 
    }
    )
  }

  const onImageChange = (e) => {
    let reader = new FileReader(); //preko ovoga uzimam data objekat i konvertujem ga u data URL
    reader.onload= (e) => {
      setImg(reader.result);
    }
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]); //ovde konvertujem data u URL; imam base64 u json 
  };
}

  return (
    <div className='create'>
        <h1>Add a New Review</h1>
        <form onSubmit={handleSubmit}>
          <label>Book title:</label>
          <input 
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Book author:</label>
          <input 
            type='text'
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label>Genre:</label>
          <select onChange={(e) => setGenre(e.target.value)}> 
            <option value='action'>Action</option>
            <option value='crime'>Crime</option>
            <option value='drama'>Drama</option>
            <option value='education & teaching'>Education & Teaching</option>
            <option value='fiction'>Fiction</option>
            <option value='health'>Health</option>
            <option value='novel'>Novel</option>
            <option value='religion & spirituality'>Religion & Spirituality</option>
            <option value='romance'>Romance</option>
            <option value='thriller'>Thriller</option>
            <option value='travel'>Travel</option>
          </select>
          <label>Your review:</label>
          <textarea 
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Review written by:</label>
          <input 
            type='text'
            required
            value={written}
            onChange={(e) => setWritten(e.target.value)}
          />
          <label>Rating:</label>
          <input 
            type='number'
            min="1"
            max="5"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <label>Image:</label>
          <input 
            type='file'
            accept='image/*'
            required
            onChange={onImageChange}
          />
           { !loading && <button>Add Blog</button> }
          { loading && <button disabled>Adding Blog...</button> }
        </form>
    </div>
  )
}

export default Create 
