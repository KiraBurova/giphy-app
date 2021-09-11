import React from 'react';

import Input from '@shared/ui/input';
import Button from '@shared/ui/button';

type Props = {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: (e: React.MouseEvent) => void;
};

const SearchBar = ({ handleOnChange, handleOnClick }: Props) => {
  return (
    <>
      <Input handleOnChange={handleOnChange} placeholder='Start typing to search...'></Input>
      <Button handleOnClick={handleOnClick} content='Search' />
    </>
  );
};

export default SearchBar;
