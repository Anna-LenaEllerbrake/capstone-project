import React from 'react'
import Dropdown from './Dropdown'
import BookList from './BookList'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TableOfContent from './TableOfContent'

export default function BookMenu({ apiUrl, active }) {
  const [isActive, setIsActive] = useState(active)
  const [books, setBooks] = useState([])
  const [currentBook, setCurrentBook] = useState()

  useEffect(() => {
    axios(apiUrl)
      .then((response) => response.data)
      .then((responseJson) => {
        setBooks(responseJson)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <Dropdown
        isActive={isActive}
        onClick={changeIsActive}
        selectText={'Wähle eine Lektürehilfe'}
        selectedText={currentBook && currentBook.topic}
      />
      {isActive ? (
        <BookList books={books} onClick={handleClick} />
      ) : currentBook ? (
        <TableOfContent bookChapters={currentBook.children} />
      ) : (
        <></>
      )}
    </div>
  )

  function handleClick(event) {
    changeIsActive()
    setCurrentBook(
      books.find((item) => item.topic === event.target.textContent)
    )
  }

  function changeIsActive() {
    setIsActive(!isActive)
  }
}
