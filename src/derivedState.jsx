import { useState } from "react";

export default function derivedState() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");

    const handleUsers = () => {
        setUsers([...users, user]);
    }

    // Derived State
    const count = users.length;
    const uniqueUser = (new Set(users)).size;

    return <>
        <h1> Derived state in ReactJS </h1>

        <h2> Total users: {count} </h2>
        <h2> Last user: {user} </h2>
        <h2> Total Unique users: {uniqueUser} </h2>
        <input type="text" placeholder="Add new user" onChange={(obj) => setUser(obj.target.value)} />
        <button onClick={handleUsers} > Add new user </button>
        {
            users.map((item, index) => (
                <h3 key={index}> {item} </h3>
            ))
        }
        <hr style={{border: '2.5px solid #167eab31'}} />
    </>
}