import React, { useEffect } from 'react';
import { useStore } from 'effector-react';

import { $trendingSearches, getTrendingSearchesFx } from './model';
// TODO: probably not good thing to import from one feature to another?
import { searchGifsFx } from '../searchGifs/model';

import TrendingSearchesChips from '@entities/trendingSearchesChips';

import { Base, Heading } from './ui/styled';

const TrendingSearches = () => {
  const trendingSearchesList = useStore($trendingSearches);

  useEffect(() => {
    getTrendingSearchesFx();
  }, []);

  const handleTrendingClick = (searchValue: string) => {
    searchGifsFx({ query: searchValue });
  };

  return (
    <Base>
      <Heading>Trending right now</Heading>
      {trendingSearchesList.length && (
        <TrendingSearchesChips searches={trendingSearchesList} onClick={handleTrendingClick} />
      )}
    </Base>
  );
};

export default TrendingSearches;
