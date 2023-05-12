import React from 'react'

const Genres = ({filterItems}) => {
  
    return (
    <div className="btn-container">
         <button className="filter-btn" onClick={() => filterItems('all')}>
            All
        </button>
         <button className="filter-btn" onClick={() => filterItems('action')}>
            Action
        </button>
         <button className="filter-btn" onClick={() => filterItems('crime')}>
            Crime
        </button>
        <button className="filter-btn"  onClick={() => filterItems('drama')}>
            Drama
        </button>
        <button className="filter-btn"  onClick={() => filterItems('education & teaching')}>
            Education & Teaching
        </button>
        <button className="filter-btn"  onClick={() => filterItems('fiction')}>
            Fiction
        </button>
        <button className="filter-btn"  onClick={() => filterItems('health')}>
            Health
        </button>
        <button className="filter-btn"  onClick={() => filterItems('novel')}>
            Novel
        </button>
        <button className="filter-btn"  onClick={() => filterItems('religion & spirituality')}>
            Religion & Spirituality
        </button>
        <button className="filter-btn"  onClick={() => filterItems('romance')}>
            Romance
        </button>
        <button className="filter-btn"  onClick={() => filterItems('thriller')}>
            Thriller
        </button>
        <button className="filter-btn"  onClick={() => filterItems('travel')}>
            Travel
        </button>
    </div>
  )
}

export default Genres