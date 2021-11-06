import { createEffect, createStore } from 'effector';

import { getTrendingSearches } from '@shared/api';

export const getTrendingSearchesFx = createEffect(() => getTrendingSearches());

export const $trendingSearches = createStore<string[]>([]).on(
  getTrendingSearchesFx.doneData,
  (_, searches) => searches
);
