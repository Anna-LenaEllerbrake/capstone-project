import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledButton = styled.button`
  border: none;
  background-color: var(--blue2);
  width: 80%;
  height: 48px;
  margin-top: 40px;
  border-radius: 24px;
  color: white;
  font-size: 1rem;
  outline: none;
`

export const ButtonLink = styled(Link)`
  width: 100%;
  text-align: center;
`

export const SectionWithButton = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px;
  align-items: center;
  width: 100%;
`
