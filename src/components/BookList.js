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

export const StyledList = styled.ul`
  margin: 4px auto 0;
  padding: 0;
  text-align: center;
  overflow: scroll;
  height: 55vh;
  
  li {
    text-align: left;
    list-style: none;
    display: block;
    width: 75%;
    margin: 2px auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > li {
    
    background-color: #82a9de;
    padding: 13px;
  }

  > ul {
    margin: 0 auto;
    padding: 0;
    text-align: center;

    > li {
      
      background-color: #B1C9EA;
      padding: 13px 13px 13px 35px;
      
    }

    > ul {
      margin: 0 auto;
      padding: 0;
      text-align: center;
  
      > li {
        
        background-color: #E1EAF7;
        padding: 13px 13px 13px 57px;
      
        
      }
  }
`

const StyledBookList = styled.ul`
  margin: 0 auto;
  padding: 0 0 10px 0;
  text-align: center;
  overflow: scroll;
  height: 53vh; //55
  width: 93%; //78
  // box-shadow: 0 2px 15px #e2e2e2;

  > li {
    text-align: left;
    list-style: none;
    display: block;
    width: 80%;
    margin: 0 auto;

    border-bottom: 2px solid #82a9de;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 13px;
  }
`
