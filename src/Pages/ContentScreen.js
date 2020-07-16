import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import { Link } from 'react-router-dom'
import { getTitleFromUrl } from '../util'

export default function ContentScreen() {
  const props = useParams()
  //const containerTopicUrl = props.chapterTopic
  const containerTopic = getTitleFromUrl(props.chapterTopic)
  const bookTitleUrl = props.bookTitle
  //const bookTitle = getTitleForUrl(props.bookTitle)
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
      <section dangerouslySetInnerHTML={{ __html: content.html }} />
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
    color: var(--primaryBlue);
    width: 100vw;
    text-align: center;

    justify-content: center;

    > a {
      position: absolute;
      left: 25px;
      top: 29px;
      justify-self: start;

      text-decoration: none;
      color: var(--primaryBlue);
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
  }
`
