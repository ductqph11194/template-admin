import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import './style.scss'
const Search = ({dataSearch, onChange }) => {
   // const [searchState, setSearchState] = useState('')

   return (
      <div className="search">
         <SearchIcon className="icon-search" />
         <input 
         type="text" 
         placeholder="Search..." 
         onChange={onChange} 
         value={dataSearch} 
         />
      </div>
   )
}

export default Search
