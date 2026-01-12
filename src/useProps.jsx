export default function useProps({children, color="green"}) {
    return (
        <>
        <h1> Uses of props </h1>
        <div style={{color:color, backgroundColor:"white"}}>
            {/* <h1> Uses of Props in React JS </h1>
            <h2> Name: {ob.name} </h2>
            <h2> Age: {ob.age} </h2> */}
            {children}
        </div>
        </>
    );
}


export function PrintArrayData() {
    const userData = [
        {
            id: 1,
            name: "Gautam",
            age: 23,
            height: 5.54
        },
        {
            id: 2,
            name: "Madhu",
            age: 20,
            height: 5.11
        },
        {
            id: 3,
            name: "Saurav",
            age: 25,
            height: 5.55
        },
        {
            id: 4,
            name: "Saloni",
            age: 21,
            height: 5.13
        }
    ];

    return <>
        <h1> Run loop inside react and print data of array </h1>

        <table border="1" >
            <thead>
                <tr style={{border:"2px dotted red"}}>
                    <td> ID </td>
                    <td> Name </td>
                    <td> Age </td>
                    <td> Height </td>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((item)=>(
                        <tr style={{border:"2px solid lightblue"}} key={item.id}>
                            <td> {item.id} </td>
                            <td> {item.name} </td>
                            <td> {item.age} </td>
                            <td> {item.height} </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
}