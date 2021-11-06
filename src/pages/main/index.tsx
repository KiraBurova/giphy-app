import React from 'react';

import SearchGifs from '@features/searchGifs';
import TrendingSearches from '@features/trendingSearches';

import { Base } from './ui/styled';

const MainPage = () => {
  return (
    <Base>
      <TrendingSearches />
      <SearchGifs />
    </Base>
  );
};

export default MainPage;
