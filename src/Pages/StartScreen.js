import React from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';

export default function StartScreen() {
  return (
    <>
      <Header
      //content={<img src="/img/schullv_logo.png" alt="SchulLV Logo" />}
      />

      <BookList />
    </>
  );
}
