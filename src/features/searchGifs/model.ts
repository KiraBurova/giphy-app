import { createEffect, createEvent, createStore, forward } from 'effector';
import { GIFObject } from 'giphy-api';

import { searchGifsAPI } from '@shared/api';

export const searchGifsFx = createEffect(({ query }: { query: string }) => searchGifsAPI(query));

export const setSearchedGif = createEvent<string>();

export const $gifs = createStore<GIFObject[]>([]).on(searchGifsFx.doneData, (_, gifs) => gifs);
export const $searchedGif = createStore('');

forward({
  from: setSearchedGif,
  to: $searchedGif,
});
