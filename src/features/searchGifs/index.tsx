import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchBar from '@/entities/searchBar/ui';

import { actions } from './slice';

const SearchGifs = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleOnClick = () => {
    dispatch(actions.searchGifs(searchValue));
  };

  return <SearchBar handleOnChange={handleOnChange} handleOnClick={handleOnClick} />;
};

export default SearchGifs;
