import React from 'react'
import BookListItem from './BookListItem'

import { render, fireEvent } from '@testing-library/react'

import bookList from '../../public/containers.json'

it('triggers an event on click', async () => {
  /** create an function mock to spy on calls */
  const onSpy = jest.fn()

  /** get the first data set from the api mocks */
  const bookData = bookList[0]

  const { getByTestId } = render(
    <BookListItem book={bookData} onClick={onSpy} />
  )

  /** Get the Button by the testid */
  const button = getByTestId('book-button')

  /** Trigger the click event of the button */
  fireEvent.click(button)

  /** Check if onSpy was triggered one time */
  expect(onSpy).toHaveBeenCalledTimes(1)
})
