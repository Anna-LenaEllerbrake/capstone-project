import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useState } from 'react'

export default function ChapterItemWithSubchapters({ item, renderItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li key={item.containerId}>
      <div onClick={toggle}>
        <span>{item.topic}</span>
        {isOpen ? <ExpandMoreIcon /> : <NavigateNextIcon />}
      </div>
      {isOpen ? (
        <ul>
          {item.children &&
            item.children.length > 0 &&
            item.children.map((chapter) => renderItem(chapter))}
        </ul>
      ) : (
        <></>
      )}
    </li>
  )

  function toggle() {
    setIsOpen(!isOpen)
  }
}
