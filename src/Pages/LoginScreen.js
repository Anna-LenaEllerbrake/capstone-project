import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import md5 from 'md5'
import { StyledButton } from '../components/Button'
import Navigation from '../components/Navigation'

export default function LoginScreen({ setLoggedIn, setUserData, loggedIn }) {
  const { register, handleSubmit, watch, errors } = useForm()
  const [response, setResponse] = useState()
  const [errorText, setErrorText] = useState('')
  const [successText, setSuccessText] = useState('')

  useEffect(() => {
    if (response) {
      console.log(response.email)
      if (response.message) {
        setErrorText('Die Anagaben sind leider nicht korrekt.')
      } else {
        setSuccessText('Du bist jetzt eingeloggt.')
        setUserData(response.email)
        setLoggedIn(true)
      }
    }
  }, [response])

  function getPasswordInMd5(password) {
    if (password) {
      return md5(password)
    }
  }

  function login(data) {
    if (data.email && data.password) {
      fetch(
        `https://www.schullv.de/api/v2/users?email=${
          data.email
        }&password=${getPasswordInMd5(data.password)}`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setResponse(responseJson)
        })
        .catch((error) => console.log(error))
    }
    console.log(
      'E-Mail: ',
      data.email,
      'Passwort(verschlüsselt): ',
      md5(data.password)
    )
  }

  return (
    <Grid>
      <header>
        <Link to="/">
          <img
            src="/img/schullv_logo.png"
            alt="Logo SchulLV - smarter learning"
          />
        </Link>
      </header>
      <StyledForm onSubmit={handleSubmit(login)}>
        <StyledTextInput
          name="email"
          placeholder="E-Mail"
          ref={register({ required: true })}
        />

        <StyledTextInput
          type="password"
          name="password"
          ref={register({ required: true })}
          placeholder="Passwort"
        />
        <StyledError>{errorText}</StyledError>
        <StyledButton type="submit" name="Login">
          Login
        </StyledButton>
        <p>{successText}</p>
      </StyledForm>
      <Navigation activeScreen="Login" loggedIn={loggedIn}></Navigation>
    </Grid>
  )
}

const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 120px auto 50px;
  justify-content: center;
  align-items: center;

  > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    > a {
      height: 40px;
      > img {
        height: 40px;
      }
    }
  }

  > div {
    align-self: start;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin: 10px auto;
  width: 70%;
  max-width: 300px;
  align-items: center;
`

const StyledTextInput = styled.input`
  margin-top: 25px;
  border: none;
  border-bottom: var(--grey3) 1px solid;
  display: block;
  width: 100%;
  background: none;
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: 1rem;
  outline: none;

  ::placeholder {
    color: var(--grey3);
  }
`

const StyledError = styled.span`
  font-size: 0.7rem;
  color: var(--error);
  width: 100%;
  margin-top: 5px;
  margin-left: 5px;
`
