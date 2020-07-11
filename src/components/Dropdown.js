import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export default function Dropdown({
  isActive,
  onClick,
  selectText,
  selectedText,
}) {
  return (
    <StyledDropdown data-testid="dropdown-button" onClick={onClick}>
      {isActive ? (
        <>
          {selectText}
          <ExpandMoreIcon size={24} />
        </>
      ) : (
        <>
          {selectedText || selectText}
          <NavigateNextIcon size={24} />
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
  background-color: var(--secondaryBlue);
  border-radius: 25px;
  width: 90%;
  padding: 13px 25px;
  margin: 30px auto 0 auto;
  align-self: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
