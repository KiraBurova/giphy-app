import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '@/entities/searchBar/ui';
import GifCard from '@entities/gifCard';

import { actions, initialStateType } from './slice';

const SearchGifs = () => {
  const dispatch = useDispatch();
  const gifs = useSelector((state: initialStateType) => state.gifs);

  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleOnClick = () => {
    dispatch(actions.searchGifs(searchValue));
  };

  return (
    <>
      <SearchBar handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
      <div>
        {gifs.length &&
          gifs.map((gif) => {
            return <GifCard>{gif.title}</GifCard>;
          })}
      </div>
    </>
  );
};

export default SearchGifs;
