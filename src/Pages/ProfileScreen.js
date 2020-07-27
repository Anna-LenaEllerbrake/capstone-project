import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import { StyledButton, SectionWithButton } from '../components/Button'
import Navigation from '../components/Navigation'

export default function ProfileScreen({
  loggedIn,
  setLoggedIn,
  userData,
  setUserData,
}) {
  const { register, handleSubmit, watch, errors } = useForm()
  const [response, setResponse] = useState()
  const [errorText, setErrorText] = useState('')
  const [successText, setSuccessText] = useState('')

  function logout() {
    setLoggedIn(false)
    setUserData('')
  }

  return (
    <Grid>
      <header>
        <h1>Profil</h1>
      </header>
      {loggedIn ? (
        <SectionWithButton>
          <h4>Du bist eingeloggt als:</h4>
          <span>{userData}</span>
          <StyledButton onClick={logout}>Logout</StyledButton>
        </SectionWithButton>
      ) : (
        <SectionWithButton>
          Du bist noch nicht eingeloggt.
          <Link to="/login">
            <StyledButton>Zum Login</StyledButton>
          </Link>
        </SectionWithButton>
      )}
      <Navigation activeScreen="Profil" loggedIn={loggedIn} />
    </Grid>
  )
}

const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto 50px;
  justify-content: space-between;
  align-items: center;

  > header {
    display: flex;
    flex-direction: row;

    width: 100vw;
    text-align: center;

    justify-content: center;

    > a {
      position: absolute;
      left: 25px;
      top: 29px;
      justify-self: start;

      text-decoration: none;
      color: var(--blue1);
      transform: scale(1.4);
    }

    > h1 {
      margin: 0 55px;
      font-size: 1.5rem;
      justify-content: center;
      align-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`
