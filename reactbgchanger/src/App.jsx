import { useState } from "react"

function App() {
  const [color,setcolor] = useState("black");

  return (
    <div className="w-full h-screen duration-1000" style={{
      backgroundColor: color
    }}>
      <div className="w-full fixed bottom-48 justify-center flex flex-wrap">
        <div className="rounded-full bg-white gap-5 flex flex-wrap px-6 py-3">

           <button className="px-6  py-3 text-white bg-red-600 rounded-full" onClick={()=>{setcolor("red")}}>Red</button>
           <button className="px-6  py-3 text-white bg-blue-600 rounded-full" onClick={()=>{setcolor("blue")}}>Blue</button>
           <button className="px-6  py-3 text-white bg-green-600 rounded-full" onClick={()=>{setcolor("green")}}>Green</button>
           <button className="px-6  py-3 text-white bg-black rounded-full" onClick={()=>{setcolor("black")}}>Black</button>
           <button className="px-6  py-3 text-black bg-white rounded-full gap-4 border-4" onClick={()=>{setcolor("white")}}>White</button>
           <button className="px-6  py-3 text-white bg-orange-600 rounded-full gap-4" onClick={()=>{setcolor("orange")}}>Orange</button>
        </div>
     
     </div>
    </div>
  )
}

export default App
