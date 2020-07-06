import React from 'react'
import { action } from '@storybook/addon-actions'
import BookList from './BookList'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  component: BookList,
  title: 'BookList',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const bookListData = {
  TocItems: [],
  updatedAt: new Date(2020, 6, 5, 19, 0),
}

export const actionsData = {}

export const Visible = () => <BookList />
