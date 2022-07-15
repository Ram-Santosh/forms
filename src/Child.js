import { useContext } from "react";
import Grandchild from "./Grandchild";
import { counterContext } from "./Activity-3";

export default function Child () {
    var [counter, setCounter] = useContext(counterContext);

    var updateCounter = () => {
        if (counter < 10) {
            counter += 1;
            setCounter(counter);
        }
    }

    return (
        <>
            <h2>Child component: Grand Child</h2>
            <button onClick={updateCounter}>Update counter</button>
            <Grandchild/>
        </>
    )
}