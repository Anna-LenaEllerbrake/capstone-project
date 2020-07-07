import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export default function Dropdown({ isActive, onClick, text }) {
  return (
    <StyledDropdown onClick={onClick}>
      {isActive ? (
        <>
          Wähle eine Lektürehilfe <ExpandMoreIcon size={24} />
        </>
      ) : (
        <>
          {text} <NavigateNextIcon size={24} />
        </>
      )}
    </StyledDropdown>
  )
}

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #82a9de;
  border-radius: 25px;
  width: 90%;
  padding: 13px 25px;
  margin: 30px auto 0 auto;
  align-self: start;
`

// function getArrow(isActive) {
//   return
//   )
// }
