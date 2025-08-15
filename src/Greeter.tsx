import Logo from "./Logo"

export default function Greeter({user="", greeterVar}){
    return(
        <div>
            <Logo greeterVar={greeterVar}/>
            <h2 style={greeterVar == 1 ? {display: "none"} : {}}>{user === "" ?  "Prosím zadejte své jméno!" : console.log(`User ${user} now logged in!`)}</h2>
        </div>
    )
}