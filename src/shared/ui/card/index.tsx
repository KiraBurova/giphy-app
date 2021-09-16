import React from 'react';

import { Base } from './styled';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <Base>{children}</Base>;
};

export default Card;
