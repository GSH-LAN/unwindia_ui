import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu title='User' children />
    </div>
  )
}

export default App
