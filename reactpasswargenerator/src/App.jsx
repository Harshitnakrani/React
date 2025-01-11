import { useCallback, useEffect, useState } from "react"


function App() {
 const [passward,setPassward] = useState("")
 const [length,setlength] = useState(8)
 const [numallow,setnumallow] = useState(false)
 const [chaallow,setcharallow] = useState(false)

 const copypass = useCallback(()=>{
  window.navigator.clipboard.writeText(passward)
  alert("pass copied")
 },[passward])

 const createpass = useCallback(()=>{
   let pass = "";
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numallow){
     str += "1234577890";
   }
   if(chaallow){
     str += "@#$%^&*";
   }
   for (let i = 1;  i<= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
   }
   window.navigator.clipboard.writeText()
   setPassward(pass)
 },[length,numallow,chaallow])

 useEffect(()=>{
   createpass()
 },[length,numallow,chaallow])
 return (
  <div className="w-full h-screen bg-black text-orange-500 p-6 justify-items-center">
   <div className="bg-gray-700 py-5 px-3 rounded-xl bottom-96 text-orange-400p max-w-md w-full justify-items-center">
        <h1 className="mb-3">Passward Generator</h1>
        <input 
        type="text" 
        value={passward}
        readOnly
        className="p-2 rounded-md mr-3"
        />

         <button className="fixed bg-blue-800 py-2 rounded-xl px-4 shrink-0 outline-none" onClick={copypass}>Copy</button><br />
         <input type="range" min={8} max={16} value={length} className="mt-2"
         onChange={(e)=>{setlength(e.target.value)}}
         />
         <label>Length:{length}</label>
         <input type="checkbox"
         defaultChecked = {numallow}
         onChange={()=>{setnumallow(prev => !prev)}}
         className="ml-2"
         />
         <label>Number</label>
         <input type="checkbox"
         defaultChecked = {chaallow}
         onChange={()=>{setcharallow( prev => !prev)}}
         className="ml-2"
         />
         <label>charcter</label>
       </div>
   </div>
 )
}

export default App
