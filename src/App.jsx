import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/login'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-light-gray min-h-[100dvh] p-8'>
      <Home />
      {/* <LoginPage /> */}
    </div>
  )
}

export default App
