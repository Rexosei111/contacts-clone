import React from 'react'
import Authenticated from './Authenticated'
import Unauthenticated from './UnAuthenticated'
import useToken from './useToken'

function App() {
  const {token, setToken} = useToken()
  
  if(!token) {
    return <Unauthenticated token={token} setToken={setToken}/>
  }

  return (
      <Authenticated token={token} />
  )
}

export default App
