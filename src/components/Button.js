import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  background-color: var(--blue2);
  justify-self: center;
  width: 80%;
  height: 48px;
  margin-top: 40px;
  border-radius: 24px;
  color: white;
  font-size: 1rem;
  outline: none;
`

export const SectionWithButton = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px;
  align-self: flex-start;
  align-items: center;

  > p {
    width: 100%;
    padding: 0 20px;
  }

  > a {
    width: 100%;
    text-align: center;
  }
`
