import React from 'react'
import BookListItem from './BookListItem'

import { render, fireEvent } from '@testing-library/react'

import bookList from '../../public/containers.json'

it('triggers an event on click', async () => {
  const onSpy = jest.fn()

  const bookData = bookList[0]

  const { getByTestId } = render(
    <BookListItem book={bookData} onClick={onSpy} />
  )

  const button = getByTestId('book-button')

  fireEvent.click(button)

  expect(onSpy).toHaveBeenCalledTimes(1)
})
