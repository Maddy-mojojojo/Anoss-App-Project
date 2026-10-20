import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Loading...")
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Could not reach the API'))
  }, [])

  return <h1>{message}</h1>
}

export default App