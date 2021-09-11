import React, { useState } from 'react';

import SearchBar from '@/entities/searchBar/ui';

import { searchGifsAPI } from '@shared/api';

const SearchGifs = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleOnClick = () => {
    searchGifsAPI(searchValue).then((response) => console.log(response));
  };

  return <SearchBar handleOnChange={handleOnChange} handleOnClick={handleOnClick} />;
};

export default SearchGifs;
