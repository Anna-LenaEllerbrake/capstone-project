import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getUrl } from '../util'

export default function ChapterItem({ item, bookTopic }) {
  return (
    <li key={item.containerId}>
      <Link
        to={`${getUrl(bookTopic)}/${getUrl(item.topic)}/${item.containerId}`}
      >
        {item.topic}
      </Link>
    </li>
  )
}
