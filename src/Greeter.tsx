import Logo from "./Logo"

export default function Greeter({user=""}){
    return(
        <>
            <Logo />
            <h2>{user === "" ?  "Prosím zadejte své jméno!" : `Vítejte uživateli ${user}!`}</h2>
        </>
    )
}