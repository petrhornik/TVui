import "./Logo.css"

export default function Logo({greeterVar=0}){
    return(
        <h1 className="Logo" style={greeterVar == 1 ? {fontSize: "4rem", margin: "0"} : {}}>TVui</h1>
    )
}