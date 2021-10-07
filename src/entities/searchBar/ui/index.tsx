import React from 'react';

import Input from '@shared/ui/input';
import Button from '@shared/ui/button';

type Props = {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ handleOnChange }: Props) => {
  return (
    <>
      <Input handleOnChange={handleOnChange} placeholder='Start typing to search...'></Input>
      <Button content='Search' />
    </>
  );
};

export default SearchBar;
