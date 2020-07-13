import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function ContentScreen({ chapter }) {
  const [content, setContent] = useState({})
  const apiSource = `https://www.schullv.de/api/v2/containers/${chapter.containerId}/labels/LKlektuerenhilfen0/contents`

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
        <h1>{chapter.topic}</h1>
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
  justify-content: center;
  align-items: center;

  > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--primaryBlue);
    font-size: 0.8rem;
  }

  > div {
    align-self: start;
  }
`
