import { useRef } from "react"


export default function UnControlledForm () {
    var firstName = useRef("");
    var lastName = useRef("");
    var email = useRef("");
    var securityQuestion = useRef("");
    var securityAnswer = useRef("");
    var bio = useRef("");

    var handleFormInput = (e) => {
        var val = e.target.value;
        var name = e.target.name;

        [name].current.value = val;
    }

    var clearForm = () => {

    }

    var handleSubmit = () => {

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onKeyUp={handleFormInput} name="firstName" placeholder="Enter your First name"></input><br/><br/>
            <input type="text" onKeyUp={handleFormInput} name="lastName" placeholder="Enter your Last name"></input><br/><br/>
            <input type="email" onKeyUp={handleFormInput} name="email" placeholder="Enter your Email"></input><br/><br/>
            <select name="securityQuestion" onChange={handleFormInput} required>
                <option value="Select an option">Select an option</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What was the name of your first pet?">What was the name of your first pet?</option>
                <option value="What was the name of your first school?">What was the name of your first school?</option>
            </select><br/><br/>
            <input type="text" onKeyUp={handleFormInput} name="securityAnswer" placeholder="Enter your answer" required></input><br/><br/>
            <textarea type="text" onKeyUp={handleFormInput} name="bio" placeholder="Enter your Bio" rows="5" cols="100"></textarea><br/>
            <button type="submit">Submit</button>&nbsp;
            <button onClick={clearForm}>Clear</button>
        </form>
        </>
    )
}