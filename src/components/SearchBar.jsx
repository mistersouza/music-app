import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSearchSubmit(event) {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);

  }
  return (
  <form className='p-2 text-gray-400 focus-within:text-gray-600' autoComplete='off' onSubmit={handleSearchSubmit}>
    <label htmlFor='search-field' className='sr-only'>Search all songs</label>
    <div className='flex flex-row justify-start items-center'>
      <FiSearch className='w-5 h-5 ml-4' />
      <input
        className='flex-1 bg-transparent border-none outline-none text-gray-500 placeholder-gray-400 text-base text-white p-4'
        name='search-field'
        autoComplete='off'
        id='search-field'
        placeholder='Search'
        type='search'
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </div>
  </form>
  ); 
};

export default SearchBar;
