import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import { Link, useParams } from 'react-router-dom'
import { getTitleFromUrl } from '../util'
import {
  StyledButton,
  SectionWithButton,
  ButtonLink,
} from '../components/Button'

export default function ContentScreen({ loggedIn }) {
  const props = useParams()
  const containerTopic = getTitleFromUrl(props.chapterTopic)
  const bookTitleUrl = props.bookTitle
  const [content, setContent] = useState({})
  const apiSource = `https://www.schullv.de/api/v2/containers/${props.containerId}/labels/LKlektuerenhilfen0/contents`

  useEffect(() => {
    axios(apiSource)
      .then((response) => response.data)
      .then((responseJson) => {
        setContent(responseJson)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Grid>
      <header>
        <Link to={`/${bookTitleUrl}`}>
          <NavigateBeforeIcon size={48} />
        </Link>
        <h1>{containerTopic}</h1>
      </header>
      {loggedIn ? (
        <section dangerouslySetInnerHTML={{ __html: content.html }} />
      ) : (
        <>
          <LayerSection dangerouslySetInnerHTML={{ __html: content.html }} />

          <Layer>
            <div></div>
            <ButtonLink to="/login">
              <StyledButton>Zum Login</StyledButton>
            </ButtonLink>
          </Layer>
        </>
      )}
    </Grid>
  )
}

const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto;
  justify-content: space-between;
  align-items: center;

  > header {
    display: flex;
    flex-direction: row;

    width: 100vw;
    text-align: center;

    justify-content: center;

    > a {
      position: absolute;
      left: 25px;
      top: 29px;
      justify-self: start;

      text-decoration: none;
      color: var(--blue1);
      transform: scale(1.4);
    }

    > h1 {
      margin: 0 55px;
      font-size: 1.5rem;
      justify-content: center;
      align-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  > section {
    padding: 0 10px 10px;
    align-self: flex-start;
  }
`
const Layer = styled.div`
  display: grid;
  grid-template-rows: auto 120px;

  position: fixed;
  top: 0;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 1)
  );
  width: 100vw;
  height: 100vh;
`

const LayerSection = styled.section`
  height: 80vh;
  overflow: hidden;
`
