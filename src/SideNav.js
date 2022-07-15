import { useContext } from "react"
import { userContext } from "./Activity-4"

export default function SideNav () {
    var [activeProfileId] = useContext(userContext);
    return (
        <>
            <h2>SideNav</h2> 
            <p>Active profile ID: {activeProfileId}</p>
        </>
    );
}