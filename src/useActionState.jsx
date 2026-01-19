import { useActionState } from "react";

export default function UseActionState() {

    const handleSubmit = async (prevData, forData) => {
        const name = forData.get("name"); // Came data from form
        const password = forData.get("password");
        await new Promise(res=>setTimeout(res, 1000)); // Give 2 sec. delay
        if(name && password) {
            return {message: "Form Submitted", name, password}; // Return to calling function
        } else {
            return {error: "Please enter both the data", name, password};
        }
    }
    const [data, action, pending] = useActionState(handleSubmit, undefined); // Received value stored into data variable; pending true till form not submitted

    return <>
        <h1> Handle form by useActionState </h1>

        <form action={action}> {/*After submit the form action come into existance, and goes to useStateAction Hook*/}
            <input type="text" defaultValue={data?.name} placeholder="Enter userName" name="name"/> <br /><br />
            <input type="password" defaultValue={data?.password} placeholder="Enter password" name="password"/> <br /><br />
            <button disabled={pending}> {pending?"Submitting...": "Submit form"} </button>
        </form>
        {
            data?.message && <span style={{paddingLeft:'10px', color: 'green'}}> {data?.message} </span>
        }
        {
            data?.error && <span style={{paddingLeft:'10px', color: 'red'}}> {data?.error} </span>
        }
        <h2> <b>Name: </b>{data?.name} </h2>
        <h2> <b>Password: </b> {data?.password} </h2>
    </>
}