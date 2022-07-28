import React from 'react'
import { addPrefetchExcludes } from 'react-static'
import Home from './pages/index'
import {Router} from './components/Router'
import './app.css'
import DontFound from './pages/404'
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (<>
  <Router>
  <Home path="/" />
  <Home path="/home" />
  <DontFound default />
  </Router></>
  )
}

export default App
