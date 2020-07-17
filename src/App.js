import React from 'react'

import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import StartScreen from './Pages/StartScreen'
import ContentScreen from './Pages/ContentScreen'
import { useState, useEffect } from 'react'
import { productionSource, developmentSource } from './constants'

function App() {
  const [books, setBooks] = useState([])
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

      <Route
        path="/:bookTitle/:chapterTopic/:containerId"
        component={ContentScreen}
      />
      <Route path="/:bookTitleForUrl">
        <StartScreen books={books} />
      </Route>
    </Switch>
  )
}

export default App
