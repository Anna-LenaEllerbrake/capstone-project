import React from 'react'

import { Switch, Route } from 'react-router-dom'

import StartScreen from './Pages/StartScreen'
import ContentScreen from './Pages/ContentScreen'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={StartScreen} />
      <Route
        path="/lektueren/kapitel/:topic/:containerId"
        component={ContentScreen}
      />
    </Switch>
  )
}

export default App
