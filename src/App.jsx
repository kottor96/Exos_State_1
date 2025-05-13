import { useState } from 'react'
import './App.css'
import Section_card from './components/Section_card'

function App() {
  const [cycle,setCycle] = useState('daily')
  return (
    <>
      <Section_card mode={cycle} action={setCycle}/>
    </>
  )
}

export default App
