import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

export default function ContentScreen() {
  const props = useParams()
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
        <h1>{props.topic}</h1>
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

    > h1 {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  > div {
    align-self: start;
  }
`
