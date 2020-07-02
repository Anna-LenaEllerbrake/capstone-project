import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  return <StyledLogo src="/img/schullv_logo.png" />;
}

const StyledLogo = styled.img`
  height: 60px;
`;
