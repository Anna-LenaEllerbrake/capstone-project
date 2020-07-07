import React from 'react'

import styled from 'styled-components'

export default function BookList({ books, clickFunction }) {
  return (
    <StyledBookList>
      {books &&
        books.length > 0 &&
        books.map((book, index) => renderItem(book, index))}
    </StyledBookList>
  )
  function renderItem(item, index) {
    return (
      <li key={index} onClick={clickFunction}>
        {item.topic}
      </li>
    )
  }
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
