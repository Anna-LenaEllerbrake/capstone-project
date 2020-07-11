import React from 'react'
import { render } from '@testing-library/react'
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
