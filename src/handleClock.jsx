import { useEffect, useState } from "react";

export default function HandleClock() {
    const [time, setTime] = useState(0);
    
    const [color, setColor] = useState("White");

    useEffect(()=>{
        let timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            console.log("Interval started")
        }, 1000);

        return () => {
            clearInterval(timer)
            console.log("Interval ended")
        }
    }, []);

    return <>
        <h1> Handle clock </h1>

        <select style={{padding:"8px", borderRadius:"4px", border:'2px solid black'}} onChange={(ev)=>setColor(ev.target.value)}>
            <option value={"Red"}> Red </option>
            <option value={"Green"}> Green </option>
            <option value={"Yellow"}> Yellow </option>
            <option value={"White"}> White </option>
        </select>

        <h3 style={{color:color, backgroundColor:'#000', width:'108px', padding:'10px', borderRadius:'4px'}}> {time} </h3>
        
    </>
}