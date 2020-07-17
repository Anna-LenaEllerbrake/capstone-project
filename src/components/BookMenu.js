import React from 'react'
import Dropdown from './Dropdown'
import BookList from './BookList'
import { useState, useEffect } from 'react'
import TableOfContent from './TableOfContent'

export default function BookMenu({ currentBookTitle, onClick, apiUrl, books }) {
  const [status, setStatus] = useState('INACTIVE')

  useEffect(() => {
    setStatus(currentBookTitle ? 'SELECTED' : 'INACTIVE')
  }, [currentBookTitle])

  const currentBook = books.find((item) => item.topic === currentBookTitle)

  return (
    <div>
      <Dropdown
        status={status}
        onClick={changeStatusOnClick}
        selectText={'Wähle eine Lektürehilfe'}
        selectedText={currentBook && currentBook.topic}
      />
      {status === 'ACTIVE' ? (
        <BookList books={books} onClick={changeStatusOnClick} />
      ) : status === 'SELECTED' && currentBook ? (
        <TableOfContent book={currentBook} />
      ) : (
        <></>
      )}
    </div>
  )

  function changeStatusOnClick() {
    if (status === 'INACTIVE') {
      setStatus('ACTIVE')
    } else if (
      status === 'ACTIVE' &&
      currentBookTitle &&
      currentBookTitle !== ''
    ) {
      setStatus('SELECTED')
    } else if (status === 'ACTIVE') {
      setStatus('INACTIVE')
    } else {
      setStatus('ACTIVE')
    }
  }
}
