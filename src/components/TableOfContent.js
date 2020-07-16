import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getUrl } from '../util'

export default function TableOfContent({ book }) {
  return (
    <StyledTableOfContent>
      {book.children &&
        book.children.length > 0 &&
        book.children.map((chapter) => renderItem(chapter))}
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
          <Link
            to={`${getUrl(book.topic)}/${getUrl(item.topic)}/${
              item.containerId
            }`}
          >
            {item.topic}
          </Link>
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
  width: 78vw;
  max-width: 400px;

  li {
    list-style: none;
  }

  span,
  a {
    text-decoration: none;
    color: var(--textGrey);
    text-align: left;
    list-style: none;
    display: block;
    margin: 2px auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > li {
    > span,
    a {
      background-color: var(--secondaryBlue);
      padding: 13px;
    }

    > ul {
      margin: 0 auto;
      padding: 0;
      text-align: center;

      > li {
        > span,
        a {
          background-color: var(--tertiaryBlue);
          padding: 13px 13px 13px 35px;
        }

        > ul {
          margin: 0 auto;
          padding: 0;
          text-align: center;

          > li > span,
          a {
            background-color: var(--quaternaryBlue);
            padding: 13px 13px 13px 57px;
          }
        }
      }
    }
  }
`
