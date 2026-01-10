import { useState } from "react";

function Fruit() {
    let [index, setIndex]=useState(0);
    const fr = ["apple", "banana", "orange", "guavava", "mango", "carrot"];

    const [display, setDisplay] = useState(true);

    function handleFruit() {
        setIndex((prev)=>(prev+1)%fr.length);
    }

    return (
        <>
            <button onClick={()=>setDisplay(!display)}> Toggle </button>
            {
                display ?
                <div>
                    <h1> Use of states in React JS </h1>
                    <h2> {fr[index]} </h2>
                    <button onClick={handleFruit}> Change fruit </button>
                </div>
                : null
            }
        </>
    )
}
export default Fruit;
