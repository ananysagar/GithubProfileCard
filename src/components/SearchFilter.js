import React from 'react'
import './SearchFilter.css';


function SearchFilter() {

  return (
    <div className='search-container'>
        <h1 className='search-heading'>Get Github Profile Cards!</h1>
        <div className='search-bar'>
            <input type='text' placeholder='Search a Github User' className='search-text'></input>
        </div>
    </div>
  )
}

export default SearchFilter