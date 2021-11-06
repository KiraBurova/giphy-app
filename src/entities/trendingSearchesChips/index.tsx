import React from 'react';

import Chip from '@shared/ui/chip';
import { getColor } from './lib/colors';

import { Base } from './ui/styled';

type Props = {
  searches: string[];
  onClick: (searchValue: string) => void;
};

const TrendingSearchesChips = ({ searches, onClick }: Props) => {
  const handleChipClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const textToSearch = target.innerText.replaceAll('#', '');

    onClick(textToSearch);
  };

  return (
    <Base>
      {searches.map(search => (
        <Chip key={search} text={`#${search}`} color={getColor()} onClick={handleChipClick} />
      ))}
    </Base>
  );
};

export default TrendingSearchesChips;
