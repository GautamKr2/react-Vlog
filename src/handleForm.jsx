import { useState } from "react"

export default function checkBox() {
    let [skills, setSkills] = useState([]);

    function handleSkill(event) {
        if(event.target.checked) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills([...skills.filter((skill)=>skill!=event.target.value)]);
        }
    }

    return <>
        <h1> Checkboxes select and store </h1>

        <label> <input type="checkbox" value="Python" onChange={handleSkill} /> Python </label> <br/><br/>
        <label> <input type="checkbox" value="Java" onChange={handleSkill} /> Java </label> <br/><br/>
        <label> <input type="checkbox" value="PHP" onChange={handleSkill} /> PHP </label> <br/><br/>
        <label> <input type="checkbox" value="NodeJS" onChange={handleSkill} /> NodeJS </label> <br/><br/>

        <h2> {skills.toString()} </h2>
    </>
}

export function Radio() {
    let [gender, setGender] = useState("not selected");
    let [city, setCity] = useState("not selected")

    return <>
        <h1> Radio select and place on UI </h1>

        <label> <input type="radio" name="gender" value="Male" onChange={(e)=>setGender(e.target.value)} /> Male </label> <br/><br/>
        <label> <input type="radio" name="gender" value="Female" onChange={(e)=>setGender(e.target.value)} /> Female </label> <br/>

        <h2> Gender: {gender} </h2> <br/>

        <select name="City" defaultValue="Patna" onChange={(ev)=>setCity(ev.target.value)}>
            <option value="Patna" > Patna </option>
            <option value="Gurgaon" > Gurgaon </option>
            <option value="Varanashi" > Varanashi </option>
            <option value="Banglore" > Banglore </option>
        </select>

        <h2> City: {city} </h2>
    </>
}