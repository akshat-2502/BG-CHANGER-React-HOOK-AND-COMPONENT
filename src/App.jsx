import { useState } from "react"
import Button from "./components/Button"


function App() {
  
  const [color, setColor] = useState("purple")

  const handleButtonClick = (color)=>{
    setColor(color);
  }

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <Button colorr ="aqua" onClick = {()=> handleButtonClick("aqua")} />
          <Button colorr ="Green" onClick = {()=> handleButtonClick("green")}/>
          <Button colorr ="Blue" onClick = {()=> handleButtonClick("blue")}/>
          <Button colorr ="red" onClick = {()=> handleButtonClick("red")}/>
          <Button colorr ="Pink" onClick = {()=> handleButtonClick("pink")}/>
          <Button colorr ="Cyan" onClick = {()=> handleButtonClick("cyan")}/>
          <Button colorr ="purple" onClick = {()=> handleButtonClick("purple")}/>
          <Button colorr ="orange" onClick = {()=> handleButtonClick("orange")}/>          
        </div> 

      </div>

    </div>
  
  )
}

export default App
 