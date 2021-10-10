import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '@/entities/searchBar/ui';
import GifCard from '@entities/gifCard';

import { actions, initialStateType } from './slice';

import { Wrapper, Cards, StyledLink } from './styled';

const SearchGifs = () => {
  const dispatch = useDispatch();
  const gifs = useSelector((state: initialStateType) => state.gifs);

  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actions.searchGifs(searchValue));
  };

  return (
    <Wrapper>
      <form onSubmit={handleOnClick}>
        <SearchBar handleOnChange={handleOnChange} />
      </form>
      {!!gifs.length && (
        <Cards>
          {gifs.map((gif) => (
            <StyledLink to={`/${gif.id}`}>
              <GifCard key={gif.id} gif={gif} />
            </StyledLink>
          ))}
        </Cards>
      )}
    </Wrapper>
  );
};

export default SearchGifs;
