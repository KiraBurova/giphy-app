import React from 'react';
import { useStore } from 'effector-react';

import SearchBar from '@/entities/searchBar/ui';
import GifCard from '@entities/gifCard';

import { $gifs, $searchedGif, searchGifsFx, setSearchedGif } from './model';

import { Wrapper, Cards, StyledLink } from './ui/styled';

const SearchGifs = () => {
  const gifs = useStore($gifs);
  const searchedGif = useStore($searchedGif);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchedGif(value);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchGifsFx({ query: searchedGif });
  };

  return (
    <Wrapper>
      <form onSubmit={handleOnClick}>
        <SearchBar handleOnChange={handleOnChange} />
      </form>
      {!!gifs.length && (
        <Cards>
          {gifs.map(gif => (
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
