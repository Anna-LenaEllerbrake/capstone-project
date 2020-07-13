import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import { NavLink } from 'react-router-dom'

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
        <NavLink to="/">
          <NavigateBeforeIcon size={48} />
        </NavLink>
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
      left: 15px;
      top: 29px;
      justify-self: start;

      text-decoration: none;
      color: var(--primaryBlue);
      transform: scale(1.4);
    }

    > h1 {
      margin: 0;
      margin-left: 50px;
      margin-right: 50px;
      font-size: 1.5rem;
      justify-content: center;
      align-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  > div {
    align-self: start;
  }
`
