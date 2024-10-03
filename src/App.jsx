import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import 'flag-icons/css/flag-icons.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body />
    </>
  )
}

export default App
