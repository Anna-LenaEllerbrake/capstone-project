// src/components/Task.stories.js

import React from 'react'
import { action } from '@storybook/addon-actions'

import BookMenu from './BookMenu'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  component: BookMenu,
  title: 'BookMenu',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const bookMenuData = {
  isActive: false,
  updatedAt: new Date(2020, 6, 5, 19, 0),
}

export const actionsData = {}

export const Inactive = () => <BookMenu active={false} />

export const Active = () => <BookMenu active={true} />
