import Greeter from "./Greeter";
import { useState } from "react";
import Users from "./simpleDB";
import "./GreeterForm.css"

export default function GreeterForm({revealFunc, styling, greeterVar}) {
    const [usrName, setUsrName] = useState("")
    const [text, setText] = useState("")
    const [valid, setValid] = useState(0);
      
    
    const updateText = (evt) => {
        setText(evt.target.value);
        
    };
    
    const updateName = () => {
        if(Users.includes(text)){
            setUsrName(text);
            setText("");
            setValid(0);
            revealFunc(1)
        } else{
            setUsrName("");
            setText("");
            setValid(1);
            revealFunc(0)
        }
    }

    const logoutName = () => {
        setUsrName("")
        setValid(0);
        revealFunc(0)
    };

    return (
        <div className="GreeterWindow Greeter_Login" style={styling}>
          <Greeter user={usrName} greeterVar={greeterVar}/>
          <div className="FormField">
            <div className="LoginForm" style={greeterVar == 1 ? {display: "none"} : {}}>
                <input className="textArea" type="text" placeholder='Zadejte jméno: ' value={text} onChange={updateText}/>
                <button onClick={updateName}>Přihlásit</button>
            </div>
            <div className="NavForm">
                <button onClick={logoutName} style={greeterVar == 0 ? {display: "none"} : {}}>Odhlásit</button>
            </div>
            {valid === 1 ? <h4 className="warning">Neplatný uživatel</h4> : ""}
          </div>
        </div>
      )
}