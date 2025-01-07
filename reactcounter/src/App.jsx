import { useState } from 'react';
function App(){
  const [count, setCount] = useState(0)
 const addValue = ()=>{
    setCount(prevCount => prevCount + 1);
  }
  const subValue = ()=>{
    setCount(prevCount => prevCount -1)
  }
  console.log(count);
  
  return(
    <>
      
      <h1>number is {count}</h1>
      <button onClick = {addValue}>add </button>
      <button onClick = {subValue}>sub </button>
      <h2>number is {count}</h2>      
      </>
    )
}
export default App
