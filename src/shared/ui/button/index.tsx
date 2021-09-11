import React from 'react';

import { Base } from './styled';

type Props = {
  content: string;
  handleOnClick: (e: React.MouseEvent) => void;
};

const Button = ({ content, handleOnClick }: Props) => {
  return <Base onClick={handleOnClick}>{content}</Base>;
};

export default Button;
