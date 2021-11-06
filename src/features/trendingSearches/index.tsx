import React, { useEffect } from 'react';
import { useStore } from 'effector-react';

import { $trendingSearches, getTrendingSearchesFx } from './model';

import TrendingSearchesChips from '@entities/trendingSearchesChips';

import { Base } from './ui/styled';

const TrendingSearches = () => {
  const trendingSearchesList = useStore($trendingSearches);

  useEffect(() => {
    getTrendingSearchesFx();
  }, []);

  return (
    <Base>
      {trendingSearchesList.length && <TrendingSearchesChips searches={trendingSearchesList} />}
    </Base>
  );
};

export default TrendingSearches;
