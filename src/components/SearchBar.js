import React from 'react'
import './Style.css';

function SearchBar(placeholder, data) {

  return (
      <div className='search'>
          <div className='searchInputs'>
              <input type="text" placeholder='Search' />
            </div>
      </div>
  )
}

export default SearchBar