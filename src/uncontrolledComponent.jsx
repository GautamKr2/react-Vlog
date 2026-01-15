import { useRef } from "react";

export default function uncontrolledComponent() {

    const handleForm = (ev) => {
        ev.preventDefault()
        console.log("Form submitted");
        let user = document.querySelector("#user").value;
        let password = document.querySelector("#password").value;
        console.log(user, password);
    }

    const userRef = useRef()
    const passwordRef = useRef()
    const handleFormRef = (event) => {
        event.preventDefault();
        console.log("Form submitted by ref");
        let user = userRef.current.value;
        let password = passwordRef.current.value;
        console.log(user, password);
    }
    
    return <>
        <h1> Uncontrolled Component </h1>

        <form onSubmit={handleForm}>
            <input type="text" id="user" placeholder="Enter username"/>
            <br/> <br/>
            <input type="password" id="password" placeholder="Enter password"/>
            <br/> <br/>
            <button> Submit </button>
        </form>

        <hr/>

        <form onSubmit={handleFormRef}>
            <input type="text" ref={userRef} placeholder="Enter username"/>
            <br/> <br/>
            <input type="password" ref={passwordRef} placeholder="Enter password"/>
            <br/> <br/>
            <button> Submit </button>
        </form>
    </>
}