import { useContext } from "react"
import { userContext } from "./Activity-4"

export default function Profile () {
    var [username] = useContext(userContext);
    return (
        <>
            <h2>Profile</h2>
            <p>Username: {username}</p>
        </>
    )
}