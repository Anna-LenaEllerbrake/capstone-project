import React from 'react'
import styled from 'styled-components'

export default function BookListItem({ book, onClick }) {
  return (
    <StyledBookListItem data-testid="book-button" onClick={onClick}>
      {book.topic}
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
  background: var(--tertiaryBlue);
`
