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

export const StyledList = styled.ul`
  margin: 4px auto 0;
  padding: 0;
  text-align: center;
  overflow: scroll;
  height: 55vh;
  width: 80%;
  
  li {
    text-align: left;
    list-style: none;
    display: block;
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
