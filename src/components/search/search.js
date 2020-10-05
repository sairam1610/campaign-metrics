import React from 'react';
import './search.scss'
const Search =({inputString,handleSearch,handleInput})=>{
    return (
        <div className="search">
            <input className="search-bar" placeholder="Search" name="search" value={inputString}
                   onKeyUp={()=>{handleSearch()}}
                   onChange={(e)=>{handleInput(e)}}/>
        </div>
    )
}

export default Search
