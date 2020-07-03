import React from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';
import Dropdown from '../components/Dropdown';
import styled from 'styled-components';

export default function StartScreen() {
  return (
    <Grid>
      <header>
        <img src="/img/schullv_logo.png" />
      </header>
      <div>
        <Dropdown />
        <BookList />
      </div>
    </Grid>
  );
}

const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 120px auto;
  justify-content: center;
  align-items: center;

  > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100vw;

    > img {
      height: 60px;
    }
  }

  > div {
    align-self: start;
  }
`;
