import { createContext, useState } from "react"
import Dashboard from "./Dashboard";

var userContext = createContext();

export default function App () {
    var [title] = useState("Member of technical staff Techmojo");
    var [username] = useState("Ram Santosh");
    var [activeProfileId] = useState("1");

    return (
    <>
        <userContext.Provider value={[title, username, activeProfileId]}>
            <Dashboard />
        </userContext.Provider>
    </>
    )
}

export { userContext };