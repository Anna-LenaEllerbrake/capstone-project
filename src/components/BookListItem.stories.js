import React from 'react'
import { action } from '@storybook/addon-actions'
import BookListItem from './BookListItem'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  component: BookListItem,
  title: 'BookListItem',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const bookListItemData = {
  containerId: '52DCAJQJ19CZ4RTY5I',
  url: 'deutsch/lektueren/agnes',
  topic: 'Agnes',
  position: 0,
  itemLevel: 0,
  isLastElement: false,
}

export const actionsData = { onClick: action('onClick') }

export const Visible = () => (
  <BookListItem book={bookListItemData} {...actionsData} />
)
