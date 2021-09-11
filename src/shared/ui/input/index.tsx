import React from 'react';

import { Base } from './styled';

type Props = {
  placeholder: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, handleOnChange }: Props) => {
  return <Base placeholder={placeholder} onChange={handleOnChange}></Base>;
};

export default Input;
