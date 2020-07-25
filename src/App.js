import React, { useState, useEffect } from 'react'

import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import StartScreen from './Pages/StartScreen'
import LoginScreen from './Pages/LoginScreen'
import ContentScreen from './Pages/ContentScreen'
import { productionSource, developmentSource } from './constants'

function App() {
  const [books, setBooks] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const apiUrl = productionSource

  useEffect(() => {
    axios(apiUrl)
      .then((response) => response.data)
      .then((responseJson) => {
        setBooks(responseJson)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <StartScreen books={books} apiUrl={apiUrl} />
      </Route>

      <Route path="/login">
        <LoginScreen login={setLoggedIn} />
      </Route>
      <Route path="/:bookTitle/:chapterTopic/:containerId">
        <ContentScreen loggedIn={loggedIn} />
      </Route>
      <Route path="/:bookTitleForUrl">
        <StartScreen books={books} />
      </Route>
    </Switch>
  )
}

export default App
