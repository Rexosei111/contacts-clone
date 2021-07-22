import {useState} from 'react'

export default function useToken() {
    const getToken = () => {
        const userToken = sessionStorage.getItem('token')
        return userToken
      }
    const [token, setToken] = useState(getToken())

    const saveToken = (userToken, email) => {
        sessionStorage.setItem('token', userToken)
        sessionStorage.setItem('email', email)
        setToken(userToken, email)
      }

      return {
          setToken: saveToken,
          token: token,
      }
    }