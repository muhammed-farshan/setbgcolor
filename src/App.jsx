
import { useState } from 'react'
import './App.css'
    

function App() {
  const[bgColor, setbgColor] =useState("white")
  const bgChange=(color)=>{
    setbgColor(color)
  }

  return (
    <>
      <div className='bg' style={{ backgroundColor: bgColor }}>
      <button className='btn' onClick={()=>bgChange("#222E50")} style={{backgroundColor: "#222E50", color: "white"}}>Navy</button>
      <button className='btn' onClick={()=>bgChange("#F7E5DA")} style={{backgroundColor: "#F7E5DA", color: "black"}}>Clay</button>
      <button className='btn' onClick={()=>bgChange("Cyan")} style={{backgroundColor: "Cyan", color: "black"}}>Cyan</button>
      <button className='btn' onClick={()=>bgChange("white")} style={{backgroundColor: "white", color: "black"}}>white</button>

      </div>
    </>
  )
}

export default App
  
