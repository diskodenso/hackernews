import React from 'react'
import './Style.css';

function SearchBar(placeholder, data) {

  return (
    <form>
      <div className='search'>
          <div className='searchInputs'>
              <input type="text" placeholder='Search' />
            </div>
      </div>
    </form>
  )
}

export default SearchBar