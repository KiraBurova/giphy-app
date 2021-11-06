import React from 'react';

type Props = {
  text: string;
  color: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

import { Base } from './styled';

const Chip = ({ text, color, onClick }: Props) => {
  return (
    <Base color={color} onClick={onClick}>
      {text}
    </Base>
  );
};

export default Chip;
