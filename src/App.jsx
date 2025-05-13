import { useState } from 'react'
import './App.css'
import Section_card from './components/Section_card'

function App() {
  const [cycle,setCycle] = useState('daily')
  const [className,setClassName] = useState('dark_mode')

  console.log(cycle);
  
  return (
    <main className={className}>
      <Section_card mode={cycle} action={setCycle}/>
    </main>
  )
}

export default App
