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

export const bookListData = [
  {
    containerId: '52DCAJQJ19CZ4RTY5I',
    topic: 'Agnes',
  },
  {
    containerId: 'NMR7JXL106RFSDY3WQ',
    topic: 'Corpus Delicti',
  },
  {
    containerId: 'S3TEBY8BCBM046GLM4',
    topic: 'Dantons Tod',
  },
  { containerId: 'H7JKJFUEFXAEKIGUMC', topic: 'Das Fräulein von Scuderi' },
  {
    containerId: '59GOR6QOD62ZEPC0KX',
    topic: 'Das Parfum',
  },
  { containerId: 'R95ZH7T7GRM3MSAFAR', topic: 'Der Besuch der alten Dame' },
  { containerId: '7QKBJY3UY2M9PK2YUK', topic: 'Der goldne Topf' },
]

export const actionsData = {}

export const Visible = () => <BookList books={bookListData} />
