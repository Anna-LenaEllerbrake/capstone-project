import React from 'react'
import styled from 'styled-components'

export default function TableOfContent({ bookChapters }) {
  return (
    <StyledTableOfContent>
      {bookChapters &&
        bookChapters.length > 0 &&
        bookChapters.map((chapter) => renderItem(chapter))}
    </StyledTableOfContent>
  )

  function renderItem(item) {
    if (item.children && item.children.length > 0) {
      return (
        <>
          <li key={item.containerId}>{item.topic} </li>
          <ul>
            {item.children &&
              item.children.length > 0 &&
              item.children.map((chapter, chapterIndex) =>
                renderItem(chapter, chapterIndex)
              )}
          </ul>
        </>
      )
    } else {
      return <li key={item.containerId}>{item.topic}</li>
    }
  }
}

export const StyledTableOfContent = styled.ul`
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
