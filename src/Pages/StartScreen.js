import React from 'react'
import styled from 'styled-components'
import BookMenu from '../components/BookMenu'

export default function StartScreen() {
  return (
    <Grid>
      <header>
        <img
          src="/img/schullv_logo.png"
          alt="Logo SchulLV - smarter learning"
        />
      </header>
      <BookMenu active={false} />
    </Grid>
  )
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
    width: 100vw;

    > img {
      height: 60px;
    }
  }

  > div {
    align-self: start;
  }
`
