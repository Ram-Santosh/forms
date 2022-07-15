import { counterContext } from "./Activity-3";
import { useContext } from "react";

export default function Grandchild () {
    var [counter] = useContext(counterContext);
    return ( <h1>Counter value: {counter}</h1>)
}