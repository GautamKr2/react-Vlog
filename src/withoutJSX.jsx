import myPhoto from './assets/selfImage.jpg' // If image in assets folder
// If image inside public folder then no need of importing

export default function CallFun() {
    const name = "Gautam Kumar"
    var age = 21.5;

    function Fruit(name) {
        alert(name);
    }

    return <>
        <h1> {name?name:"user not found"} </h1>
        <h2> Age = {age} </h2>
        <button onClick={() => Fruit("Apple")}> Apple </button>
        <button onClick={() => Fruit("Banana")}> Banana </button>
        <br />
        <img
            // src="/selfImage.jpg" alt="My image" className="photo" // Image in public folder
            src={myPhoto} alt="My image" className="photo" // Use of imported image
        />
        <div>
            <img src="https://img.freepik.com/free-photo/two-brown-trees_395237-252.jpg?semt=ais_hybrid&w=740&q=80" alt="Image of Tree" />
        </div>
        <ul>
            <li>Invented new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
    </>
}
