import React from 'react'
import { action } from '@storybook/addon-actions'

import TableOfContent from './TableOfContent'
import GlobalStyles from './GlobalStyles'
import { addDecorator } from '@storybook/react'
addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  component: TableOfContent,
  title: 'TableOfContent',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const tableOfContentData = [
  {
    tocHasContainerId: 'F0JRVQHXJ7RAIGDDTU',
    containerId: 'DMUKRIZE9ROLYMUDFM',
    url: 'deutsch/lektueren/agnes/kontext_einordnung',
    topic: 'Kontext und Einordnung',
    shortenedTopic: 'Kontext und Einordnun...',
    position: 1,
    itemLevel: 1,
    isLastElement: true,
    children: null,
  },

  {
    tocHasContainerId: '6ZSCDT2JUA9UGSNL47',
    containerId: 'VIFK25D1EV6HWQI55Y',
    url: 'deutsch/lektueren/agnes/handlung',
    topic: 'Handlung',
    shortenedTopic: 'Handlung',
    position: 5,
    itemLevel: 1,
    isLastElement: false,
    children: [
      {
        tocHasContainerId: 'JRB1TP9R640F8B9UFZ',
        containerId: '9J4XL8ZYR9MJ6087W0',
        url: 'deutsch/lektueren/agnes/handlung/kapitel_1',
        topic: 'Kapitel 1',
        shortenedTopic: 'Kapitel 1',
        position: 6,
        itemLevel: 2,
        isLastElement: true,

        children: null,
      },
      {
        tocHasContainerId: 'EZ1HOCK93ZR4JHT2J1',
        containerId: 'XDDOTD4IEVB93ROEE4',
        url: 'deutsch/lektueren/agnes/charaktere',
        topic: 'Charaktere',
        shortenedTopic: 'Charaktere',
        position: 13,
        itemLevel: 1,
        isLastElement: false,
        children: [
          {
            tocHasContainerId: 'UHYO5NBDQZ1RSOPKLQ',
            containerId: '2U44B3KV2KTL8E501L',
            url: 'deutsch/lektueren/agnes/charaktere/agnes',
            topic: 'Agnes',
            shortenedTopic: 'Agnes',
            position: 14,
            itemLevel: 2,
            isLastElement: true,

            children: null,
          },
          {
            tocHasContainerId: 'RY07S6UWAO1ALDI8I1',
            containerId: 'KH42Q4SFVWMQ888DOQ',
            url: 'deutsch/lektueren/agnes/charaktere/erzaehler',
            topic: 'Erzähler',
            shortenedTopic: 'Erzähler',

            position: 15,
            itemLevel: 2,
            isLastElement: true,
            children: null,
          },
          {
            tocHasContainerId: '8AKFPEOJG0XLQRM4KY',
            containerId: '30U38EDFJCFZLTFLLR',
            url: 'deutsch/lektueren/agnes/charaktere/louise',
            topic: 'Louise',
            shortenedTopic: 'Louise',
            position: 16,
            itemLevel: 2,
            isLastElement: true,

            children: null,
          },
        ],
      },
    ],
  },
  {
    tocHasContainerId: 'V5N4O6P43GL2IYHT9H',
    containerId: '83N9RTADDRC3S72MVU',
    url: 'deutsch/lektueren/agnes/formaler_aufbau',
    topic: 'Formaler Aufbau',
    shortenedTopic: 'Formaler Aufbau',
    position: 2,
    itemLevel: 1,
    isLastElement: false,
    children: [
      {
        tocHasContainerId: 'MYZ0D0I441G93X1XPJ',
        containerId: 'PSKIAY7GJ3GILPTQ2Z',
        url: 'deutsch/lektueren/agnes/formaler_aufbau/romanstruktur',
        topic: 'Romanstruktur',
        shortenedTopic: 'Romanstruktur',
        position: 3,
        itemLevel: 2,
        isLastElement: true,

        children: null,
      },
      {
        tocHasContainerId: 'K20RPHLUB0YGRIM2JW',
        containerId: 'ITBC76AF296AZMDWZG',
        url: 'deutsch/lektueren/agnes/formaler_aufbau/intertextualitaet',
        topic: 'Intertextualität',
        shortenedTopic: 'Intertextualität',

        position: 4,
        itemLevel: 2,
        isLastElement: true,

        children: null,
      },
    ],
  },
]

export const Opened = () => <TableOfContent bookChapters={tableOfContentData} />
