import React from 'react'
import Dropdown from './Dropdown'
import BookList from './BookList'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function BookMenu({ active }) {
  const [isActive, setIsActive] = useState(active)
  const [books, setBooks] = useState([])
  const [currentBook, setCurrentBook] = useState()

  useEffect(() => {
    axios(
      'https://www.schullv.de/api/v2/categories/MSHSBWAI7Q7596198M/light_containers'
    )
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
        text={currentBook ? currentBook : 'Wähle eine Lektürehilfe'}
      />
      {isActive ? (
        <BookList books={books} clickFunction={handleClick} />
      ) : (
        <></>
      )}
    </div>
  )

  function handleClick(event) {
    changeIsActive()
    console.log(event.target)
    setCurrentBook(event.target.textContent)
    console.log(event.target.textContent)
  }

  function changeIsActive() {
    setIsActive(!isActive)
  }
}
