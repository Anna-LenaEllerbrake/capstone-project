import React from 'react'

import styled from 'styled-components'

export default function BookList({ books, clickFunction }) {
  return (
    <StyledBookList>
      {books && books.length > 0 && books.map((book) => renderItem(book))}
    </StyledBookList>
  )
  function renderItem(item) {
    return (
      <li key={item.containerId} onClick={clickFunction}>
        {item.topic}
      </li>
    )
  }
}

const StyledBookList = styled.ul`
  margin: 0 auto;
  padding: 0 0 10px 0;
  text-align: center;
  overflow: scroll;
  height: 45vh; //55
  width: 78%;
  //box-shadow: 0 2px 15px #e2e2e2;
  background: #b1c9ea;

  > li {
    text-align: left;
    list-style: none;
    display: block;
    width: 100%;
    margin: 0 auto;

    border-bottom: 2px solid white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 13px;
  }
`
