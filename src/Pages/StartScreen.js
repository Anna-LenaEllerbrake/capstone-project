import React from 'react'
import styled from 'styled-components'
import BookMenu from '../components/BookMenu'
import { useParams } from 'react-router-dom'
import { getTitleFromUrl } from '../util'

export default function StartScreen({ books, apiUrl }) {
  const props = useParams()

  const currentBookTitle =
    props.bookTitleForUrl && getTitleFromUrl(props.bookTitleForUrl)

  return (
    <Grid>
      <header>
        <img
          src="/img/schullv_logo_with_mission.png"
          alt="Logo SchulLV - smarter learning"
        />
      </header>
      <BookMenu
        currentBookTitle={currentBookTitle}
        apiUrl={apiUrl}
        books={books}
      />
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
