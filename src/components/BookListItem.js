import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getUrl } from '../util'

export default function BookListItem({ book, onClick }) {
  const urlTopic = getUrl(book.topic)

  return (
    <StyledBookListItem data-testid="book-button">
      <Link to={`/${urlTopic}`} onClick={onClick}>
        {book.topic}
      </Link>
    </StyledBookListItem>
  )
}

const StyledBookListItem = styled.li`
  list-style: none;
  text-align: left;
  display: block;
  margin: 0 auto;
  padding: 13px;
  border-bottom: 2px solid white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: var(--blue3);

  > a {
    text-decoration: none;
    color: var(--textGrey);
  }
`
