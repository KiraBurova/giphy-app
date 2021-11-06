import React from 'react';

import Chip from '@shared/ui/chip';

import { getColor } from './lib/colors';

import { Base } from './ui/styled';

type Props = {
  searches: string[];
};

const TrendingSearchesChips = ({ searches }: Props) => {
  return (
    <Base>
      {searches.map((search, index) => (
        <Chip key={index} text={`#${search}`} color={getColor()} />
      ))}
    </Base>
  );
};

export default TrendingSearchesChips;
