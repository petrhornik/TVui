import './App.css'
import GreeterForm from './GreeterForm'
import { useState } from 'react'

function App() {
  const [greeter, setGreeter] = useState(0)
  console.log(greeter);
  
  


  return (
    <section className='TVui' style={greeter == 0 ? {justifyContent: "center"} : {justifyContent: "start"}}>
      <div className="GreeterDiv" >
        <GreeterForm revealFunc={setGreeter}/>
        <h2>{greeter}</h2>
      </div>
    </section>
  )
}

export default App
