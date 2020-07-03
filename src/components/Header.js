import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo src="/img/schullv_logo.png" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  position: fixed;
  align-self: center;
  width: 100vw;
  height: 100px;
  top: 0;

  .header-shadow::after {
    content: '';
    display: block;
    height: 6px;
    background: linear-gradient(#0004 10%, transparent);
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0%;
  }
`;

const StyledLogo = styled.img`
  height: 60px;
`;
