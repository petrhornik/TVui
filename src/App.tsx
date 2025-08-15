import './App.css'
import GreeterForm from './GreeterForm'
import { useState } from 'react'
import ContentWindow from './ContentWindow'

function App() {
  const [greeter, setGreeter] = useState(0)
  console.log(greeter);
  const GreeterTransform = 7;
  


  return (
    <section className='TVui'style={greeter == 0 ? {justifyContent: "center"} : {justifyContent: "start"}}>
      <div className="GreeterDiv">
        <GreeterForm revealFunc={setGreeter} styling={greeter == 0 ? {} : {display: "flex", justifyContent: "space-between", width: "80rem", marginTop: "1em"}} greeterVar={greeter}/>
        <h2>{greeter}</h2>
      </div>
      <div className='ContentWindow' style={greeter == 0 ? {display: "none"} : {display: "block"}}>
        <ContentWindow />
      </div>
    </section>
  )
}

export default App
