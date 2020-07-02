import React from 'react';
import Header from '../components/Header';
import TableOfContent from '../components/TableOfContent';

export default function StartScreen() {
  return (
    <>
      <Header
      //content={<img src="/img/schullv_logo.png" alt="SchulLV Logo" />}
      />

      <TableOfContent />
    </>
  );
}
