import React from 'react'
import styled from 'styled-components'
import ChapterItem from './ChapterItem'
import ChapterItemWithSubchapters from './ChapterItemWithSubchapters'

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
        <ChapterItemWithSubchapters
          key={item.containerId}
          renderItem={renderItem}
          item={item}
        />
      )
    } else {
      return (
        <ChapterItem
          key={item.containerId}
          item={item}
          bookTopic={book.topic}
        />
      )
    }
  }
}

export const StyledTableOfContent = styled.ul`
  margin: 4px auto 0;
  padding: 0;
  overflow: scroll;
  height: 55vh;
  width: 78vw;
  max-width: 400px;

  ul {
    margin: 0 auto;
    padding: 0;
  }

  svg {
    height: 19px;
  }

  li {
    list-style: none;
  }

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

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2px auto;

    > span {
      text-align: left;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  > li {
    > div,
    a {
      background-color: var(--blue2);
      padding: 13px;
    }

    > ul {
      > li {
        > div,
        a {
          background-color: var(--blue3);
          padding: 13px 13px 13px 35px;
        }

        > ul {
          > li > div,
          a {
            background-color: var(--blue4);
            padding: 13px 13px 13px 57px;
          }
        }
      }
    }
  }
`
