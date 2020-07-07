import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export default function Dropdown({ isActive, onClick, text }) {
  return (
    <StyledDropdown onClick={onClick}>
      {text} {getArrow(isActive)}
    </StyledDropdown>
  )
}

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2d6ec8;
  border-radius: 25px;
  width: 80%;
  padding: 13px 25px;
  margin: 30px auto 0 auto;
  align-self: start;
`

function getArrow(isActive) {
  return isActive ? (
    <ExpandMoreIcon size={24} />
  ) : (
    <NavigateNextIcon size={24} />
  )
}
