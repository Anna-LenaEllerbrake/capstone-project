import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
