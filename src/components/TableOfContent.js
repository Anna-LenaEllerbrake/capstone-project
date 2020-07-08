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
        <li key={item.containerId}>
          <span> {item.topic}</span>
          <ul>
            {item.children &&
              item.children.length > 0 &&
              item.children.map((chapter) => renderItem(chapter))}
          </ul>
        </li>
      )
    } else {
      return (
        <li key={item.containerId}>
          <span> {item.topic}</span>
        </li>
      )
    }
  }
}

export const StyledTableOfContent = styled.ul`
  margin: 4px auto 0;
  padding: 0;
  text-align: center;
  overflow: scroll;
  height: 55vh;
  width: 80vw;

  li {
    list-style: none;
  }

  span {
    text-align: left;
    list-style: none;
    display: block;
    margin: 2px auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > li {
    > span {
      background-color: #82a9de;
      padding: 13px;
    }

    > ul {
      margin: 0 auto;
      padding: 0;
      text-align: center;

      > li {
        > span {
          background-color: #b1c9ea;
          padding: 13px 13px 13px 35px;
        }

        > ul {
          margin: 0 auto;
          padding: 0;
          text-align: center;

          > li > span {
            background-color: #e1eaf7;
            padding: 13px 13px 13px 57px;
          }
        }
      }
    }
  }
`
