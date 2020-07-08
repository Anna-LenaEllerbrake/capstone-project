import React from 'react'
import { StyledList } from './BookList'

export default function TableOfContent({ bookChapters }) {
  return (
    <StyledList>
      {bookChapters &&
        bookChapters.length > 0 &&
        bookChapters.map((chapter) => renderItem(chapter))}
    </StyledList>
  )

  function renderItem(item) {
    if (item.children && item.children.length > 0) {
      return (
        <>
          <li key={item.containerId}>{item.topic} </li>
          <ul>
            {item.children &&
              item.children.length > 0 &&
              item.children.map((chapter, chapterIndex) =>
                renderItem(chapter, chapterIndex)
              )}
          </ul>
        </>
      )
    } else {
      return <li key={item.containerId}>{item.topic}</li>
    }
  }
}
