import React from 'react';

import SearchGifs from '@features/searchGifs';
import SideBar from '@entities/sidebar';

import { Base } from './ui/styled';

const MainPage = () => {
  return (
    <Base>
      <SideBar />
      <SearchGifs />
    </Base>
  );
};

export default MainPage;
