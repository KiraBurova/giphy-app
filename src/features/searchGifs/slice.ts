import { createSlice, createAction, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { GIFObject } from 'giphy-api';

const stateName = 'searchedGifs';

export type initialStateType = {
  gifs: GIFObject[];
};

const initialState: initialStateType = {
  gifs: [],
};

const searchGifs = createAction<string>(`${stateName}/searchGifs`);

const setSearchedGifs: CaseReducer<initialStateType, PayloadAction<GIFObject[]>> = (state, action) => {
  state.gifs = action.payload;
};

const slice = createSlice({
  name: stateName,
  initialState,
  reducers: {
    setSearchedGifs,
  },
});

const searchGifsReducer = slice.reducer;

export const actions = {
  ...slice.actions,
  searchGifs,
};

export default searchGifsReducer;
