import React from 'react';
import Dropdown from './Dropdown';
import BookList from './BookList';
import { useState } from 'react';

export default function BookMenu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <Dropdown isActive={isActive} onClick={changeIsActive} />
      {isActive ? <BookList /> : <></>}
    </div>
  );

  function changeIsActive() {
    setIsActive(!isActive);
  }
}
