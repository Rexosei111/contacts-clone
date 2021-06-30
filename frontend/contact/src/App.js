import React from 'react'
// import useToken from './useToken'
import TopNav from './components/TopNav/TopNav'
import { CssBaseline } from "@material-ui/core"
import Main from './components/Main/Main'

function App() {
  
  return (
    <div>
      <CssBaseline />
      <TopNav />
      <Main />
    </div>
  )
}

export default App
