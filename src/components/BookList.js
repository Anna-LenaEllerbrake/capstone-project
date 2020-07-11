import React from 'react'
import styled from 'styled-components'
import BookListItem from './BookListItem'

export default function BookList({ books, onClick }) {
  return (
    <StyledBookList>
      {books &&
        books.length > 0 &&
        books.map((book) => (
          <BookListItem key={book.containerId} book={book} onClick={onClick} />
        ))}
    </StyledBookList>
  )
}

const StyledBookList = styled.ul`
  margin: 0 auto;
  padding: 0;
  overflow: scroll;
  height: 55vh;
  width: 76vw;
  background: var(--tertiaryBlue);
`
