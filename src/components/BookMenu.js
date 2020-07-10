import React from 'react'
import Dropdown from './Dropdown'
import BookList from './BookList'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TableOfContent from './TableOfContent'
import { productionSource, developmentSource } from '../constants'

export default function BookMenu({ active }) {
  const [isActive, setIsActive] = useState(active)
  const [books, setBooks] = useState([])
  const [currentBook, setCurrentBook] = useState()

  useEffect(() => {
    axios(developmentSource)
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
        text={currentBook ? currentBook.topic : 'Wähle eine Lektürehilfe'}
      />
      {isActive ? (
        <BookList books={books} clickFunction={handleClick} />
      ) : (
        <></>
      )}
      {!isActive && currentBook ? (
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
