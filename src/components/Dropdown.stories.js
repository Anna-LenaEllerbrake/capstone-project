// src/components/Task.stories.js

import React from 'react'
import { action } from '@storybook/addon-actions'

import Dropdown from './Dropdown'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  component: Dropdown,
  title: 'Dropdown',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const dropdownData = {
  selectText: 'Wähle eine Lektürehilfe',
  selectedText: 'Agnes',
  isActive: false,
  text: 'Corpus Delicti',
}

export const actionsData = {
  onClick: action('onClick'),
}

export const Inactive = () => <Dropdown {...dropdownData} {...actionsData} />

export const Active = () => (
  <Dropdown {...dropdownData} isActive={true} {...actionsData} />
)
