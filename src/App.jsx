import { useState } from 'react'
import './App.css'
import Section_card from './components/Section_card'

function App() {
  const [cycle,setCycle] = useState('daily')
  const [className,setClassName] = useState('dark_mode')
  function TogNight(){
    className == 'dark_mode' ? setClassName('light_mode') : setClassName('dark_mode')
  }
  
  return (
    <main className={className}>
      <Section_card mode={cycle} action={setCycle} night={TogNight} isDark={className}/>
    </main>
  )
}

export default App
