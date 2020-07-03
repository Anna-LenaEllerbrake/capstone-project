import React from 'react';
import styled from 'styled-components';

export default function Dropdown() {
  return <StyledDropdown>Wähle eine Lektürehilfe</StyledDropdown>;
}

const StyledDropdown = styled.div`
  background-color: #2d6ec8;
  border-radius: 25px;
  width: 80%;
  padding: 13px;
  margin: 30px auto 0 auto;
  align-self: start;
`;
