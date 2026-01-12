import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0)

    function callOnce() {
        console.log("CallOnce called")
    }
    // callOnce();
    useEffect(()=>{
        callOnce()
    }, []);

    return <>
        <h1> Use Effect </h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
        <pre>Count: {count}</pre>
    </>
}
export default UseEffect;
