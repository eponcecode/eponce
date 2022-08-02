import React from 'react'
import { addPrefetchExcludes } from 'react-static'
import Home from './pages/index'
import {Router} from './components/Router'
import './app.css'
import DontFound from './pages/404'
import Poesia from './pages/poesia'
import Patreon from './pages/patreon'
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (<>
  <Router>
  <Home path="/" />
  <Home path="/home" />
  <Poesia path="/poesia"/>
  <Patreon path="/patreon"/>
  <DontFound default />
  </Router></>
  
  )
}

export default App
