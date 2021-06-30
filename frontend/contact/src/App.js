import React from 'react'
// import useToken from './useToken'
import TopNav from './components/TopNav/TopNav'
import SideBar from './components/SideNav/SideBar'
import { CssBaseline } from "@material-ui/core"

function App() {
  
  return (
    <div>
      <CssBaseline />
      <TopNav />
      <SideBar />
    </div>
  )
}

export default App
