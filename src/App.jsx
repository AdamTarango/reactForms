import { useState } from 'react'
import Authenticate from './components/Authenticate'
import SignUp from './components/SignUpForm'
import './App.css'

const App = () =>{
  const [token, setToken] = useState(null)
  return (
    <>
      <SignUp token={token} setToken={setToken} />
      <Authenticate token={token} />
    </>
  )
  }

export default App
