// import Header, {Profile, name} /*{Aa}*/ from './Header'
// import CallFun from './withoutJSX'
// import Fruit from './statesUse'
import UseProps from './useProps';

function App() {
  const obj = {
    name: "Gautam",
    age: 21
  }
  return <>
    {/* <h1> Nahi chal raha hai kya? </h1>
    <h1> Hello guys </h1>
    <Header />
    <Profile />
    <p>{name}</p> */}
    {/* <div> < CallFun /> </div> 
    <button onClick={()=>alert("You clicked me!")}>Click_me</button> */}
    {/* <Fruit /> */}

    <UseProps ob={obj} />
  </>
}
export default App