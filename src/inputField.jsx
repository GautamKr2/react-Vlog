import {useState} from "react";

function inputField() {
    let [val, setVal] = useState("");

    // let [name, setName] = useState(null);
    // let [age, setAge] = useState(null);
    // let [state, setState] = useState(null);

    let [formData, setFormData] = useState({
        name : "",
        age : "",
        state : ""
    });

    function handleChange(ev) {
        setFormData({
            ...formData,
            [ev.target.name]: [ev.target.value]
        });
    }

    return (<>
        <h1> Input Field Value </h1>
        <div>
            {/* <input type="text" placeholder="Enter your name" onChange={(ev)=>setName(ev.target.value)} /> <br/>
            <input type="number" placeholder="Enter your age: " onChange={(ev)=>setAge(ev.target.value)} /> <br/>
            <input type="text" placeholder="Enter your state: " onChange={(ev)=>setState(ev.target.value)} /> <br/> */}

            <input type="text" value={formData.name} name="name" placeholder="Enter your name" onChange={handleChange} /> <br/> <br/>
            <input type="number" value={formData.age} name="age" placeholder="Enter your age: " onChange={handleChange} /> <br/> <br/>
            <input type="text" value={formData.state} name="state" placeholder="Enter your state: " onChange={handleChange} /> <br/> <br/>

            <div>
                <ul>
                    <li> Name: {formData.name} </li>
                    <li> Age: {formData.age} </li>
                    <li> State: {formData.state} </li>
                </ul>
            </div>

            {/* <button onClick={()=>{setName(""),setAge(""),setState("")}}>Clear Form Data</button> */}
            <button onClick={()=>{
                setFormData({
                    name: "",
                    age: "",
                    state: ""
                });
            }}>Clear form Data</button>

        </div>

        <hr />

        <div>
            <h2> {val} </h2>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Enter any string: "></input>
            <br/> <br/>
            <button onClick={()=>setVal("")}> Clear </button>
        </div>
    </>);
}
export default inputField;
