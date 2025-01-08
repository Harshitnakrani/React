import { useState } from 'react'
import './index.css'
import Card from './components/Card'
function App(props) {
  const [count, setCount] = useState(0)
    
  return (
    <>
    
    <h1 className='bg-green-400 mb-5 w-50 rounded-xl  text-center p-3'>CARD WITH PROPS</h1>
    <Card nam = "harshit"/>
    <Card nam = "nirav"/>
    </>
  )
}

export default App