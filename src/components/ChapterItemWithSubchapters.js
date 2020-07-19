import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

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
