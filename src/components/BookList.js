import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function BookList() {
  const [TocItems, setTocItems] = useState([])

  useEffect(() => {
    axios('./containers.json')
      .then((response) => response.data)
      .then((responseJson) => {
        setTocItems(responseJson)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <StyledBookList>
      {TocItems &&
        TocItems.length > 0 &&
        TocItems.map((item) => renderItem(item))}
    </StyledBookList>
  )
}

function renderItem(item) {
  return <li key={item.containerId}>{item.topic}</li>
}

const StyledBookList = styled.ul`
  margin: 0 auto;
  padding: 0;
  text-align: center;
  overflow: scroll;
  height: 300px;

  > li {
    text-align: left;
    list-style: none;
    display: inline-block;
    background-color: #82a9de;
    padding: 13px;
    width: 70%;
    margin: 1px auto;
  }
`
