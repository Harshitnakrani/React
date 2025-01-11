import { useState } from 'react'
import './index.css'
import Card from './components/Card'
function App(props) {
  const [count, setCount] = useState(0)
    
  return (
    <>


    <h1 className='bg-green-400 mb-5 w-50 rounded-xl  text-center p-3'>CARD WITH PROPS</h1>
    <div className="flex gap-10 mt-10 justify-items-center rounded-lg w-full">
       <Card nam = "harshit"/>
       <Card nam = "nirav"/>
    </div>
    </>
  )
}

export default App