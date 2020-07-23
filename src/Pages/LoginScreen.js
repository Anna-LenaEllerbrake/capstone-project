import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

export default function LoginScreen() {
  const { register, handleSubmit, watch, errors } = useForm()

  function onSubmit(data) {
    console.log(md5(data.password))
  }

  return (
    <Grid>
      <header>
        <img
          src="/img/schullv_logo.png"
          alt="Logo SchulLV - smarter learning"
        />
      </header>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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

        <StyledButton type="submit" name="Login">
          Login
        </StyledButton>
      </StyledForm>
    </Grid>
  )
}

const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 120px auto;
  justify-content: center;
  align-items: center;

  > header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    > img {
      height: 40px;
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

const StyledButton = styled.button`
  border: none;
  background-color: var(--blue2);
  justify-self: center;
  width: 80%;
  height: 48px;
  margin-top: 50px;
  border-radius: 24px;
  color: white;
  font-size: 1rem;
  outline: none;
`
