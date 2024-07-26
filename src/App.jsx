import { useState } from 'react'
import Theme from './components/Theme'
import Main from './components/Main'

const App = () => {
  const [dark, setDark] = useState(false)
  
  return (
    <main className={`${dark ? "mainDark" : "mainLight"}`}>
      <Theme dark={dark} setDark={setDark} />
      <Main dark={dark} />
    </main>
  )
}

export default App