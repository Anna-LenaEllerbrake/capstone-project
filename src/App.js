import React, { useState, useEffect } from 'react'

import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import StartScreen from './Pages/StartScreen'
import ProfileScreen from './Pages/ProfileScreen'
import LoginScreen from './Pages/LoginScreen'
import ContentScreen from './Pages/ContentScreen'
import { productionSource, developmentSource } from './constants'

function App() {
  const [books, setBooks] = useState([])
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem('loggedIn')) || false
  )
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('email')) || ''
  )
  const apiUrl = productionSource

  useEffect(() => {
    axios(apiUrl)
      .then((response) => response.data)
      .then((responseJson) => {
        setBooks(responseJson)
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
    localStorage.setItem('email', JSON.stringify(userData))
  }, [loggedIn])

  return (
    <Switch>
      <Route exact path="/">
        <StartScreen books={books} apiUrl={apiUrl} loggedIn={loggedIn} />
      </Route>

      <Route path="/login">
        <LoginScreen
          setLoggedIn={setLoggedIn}
          setUserData={setUserData}
          loggedIn={loggedIn}
        />
      </Route>
      <Route path="/profil">
        <ProfileScreen
          setLoggedIn={setLoggedIn}
          setUserData={setUserData}
          userData={userData}
          loggedIn={loggedIn}
        />
      </Route>
      <Route path="/:bookTitle/:chapterTopic/:containerId">
        <ContentScreen loggedIn={loggedIn} />
      </Route>
      <Route path="/:bookTitleForUrl">
        <StartScreen books={books} loggedIn={loggedIn} />
      </Route>
    </Switch>
  )
}

export default App
