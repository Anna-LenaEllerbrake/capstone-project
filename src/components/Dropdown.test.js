import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dropdown from './Dropdown'

it('exists an text content Wähle eine Lektürehilfe', () => {
  const { queryByText } = render(
    <Dropdown selectText={'Wähle eine Lektürehilfe'} />
  )
  expect(queryByText('Wähle eine Lektürehilfe')).toBeTruthy()
})

it('triggers an event on click', async () => {
  const onSpy = jest.fn()
  const { getByTestId } = render(<Dropdown onClick={onSpy} />)

  const button = getByTestId('dropdown-button')

  fireEvent.click(button)

  expect(onSpy).toHaveBeenCalledTimes(1)
})
