import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dropdown from './Dropdown'

// it('renders a div with the text Wähle eine Lektürehilfe', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<Dropdown />, div)
//   expect(div.querySelector('div').textContent).toBe('Wähle eine Lektürehilfe')
// })

it('exists an text content Wähle eine Lektürehilfe', () => {
  const { queryByText } = render(
    <Dropdown selectText={'Wähle eine Lektürehilfe'} />
  )
  expect(queryByText('Wähle eine Lektürehilfe')).toBeTruthy()
})

it('triggers an event on click', async () => {
  /** create an function mock to spy on calls */
  const onSpy = jest.fn()

  /** get the first data set from the api mocks */

  const { getByTestId } = render(<Dropdown onClick={onSpy} />)

  /** Get the Button by the testid */
  const button = getByTestId('dropdown-button')

  /** Trigger the click event of the button */
  fireEvent.click(button)

  /** Check if onSpy was triggered one time */
  expect(onSpy).toHaveBeenCalledTimes(1)
})
