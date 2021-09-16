import React from 'react';

import Card from '@shared/ui/card';

import { Base } from './styled';

type Props = {
  children: React.ReactNode;
};

const gifCard = ({ children }: Props) => {
  return (
    <Base>
      <Card>{children}</Card>
    </Base>
  );
};

export default gifCard;
