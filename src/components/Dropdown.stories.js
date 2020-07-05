// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';
import GlobalStyles from '../GlobalStyles';
import { addDecorator } from '@storybook/react';
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
));

export default {
  component: Dropdown,
  title: 'Dropdown',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const dropdownData = {
  isActive: false,
  updatedAt: new Date(2020, 6, 5, 19, 0),
};

export const actionsData = {
  onClick: action('onClick'),
};

export const Inactive = () => (
  <Dropdown isActive={false} onClick={actionsData} />
);

export const Active = () => <Dropdown isActive={true} onClick={actionsData} />;
