import { useContext } from "react"
import { userContext } from "./Activity-4"

export default function TopNav () {
    var [title] = useContext(userContext);
    return (
        <>
            <h2>TopNav</h2>
            <p>Title: {title}</p>
        </>
    )
}