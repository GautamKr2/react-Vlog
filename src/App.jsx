import { useState } from 'react';
// import Header, {Profile, name} /*{Aa}*/ from './Header'
// import CallFun from './withoutJSX'
// import Fruit from './statesUse'
import HandleClock from './handleClock';
import UseEffect from './useEffect';
import UseProps, { CollegeInfo, PrintArrayData } from './useProps';
import InlineStyle from './styleInlineReact';
// import InputField from "./inputField"
// import CheckBoxes, { Radio } from "./handleForm"
import StyleComponent from './styleComponent';
import UncontrolledComponent from './uncontrolledComponent';
import ForwardRef from './forwardRefP';

function App() {
  const [showClock, setShowClock] = useState(true);
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

    {/* <UseProps ob={obj} />
    <UseProps color="red">
      <p style={{color:"orange"}}> This is sent from the calling time. </p>
    </UseProps> */}

    {/* < InputField /> */}

    {/* <CheckBoxes /> <hr/>
    <Radio/> */}

    {/* <PrintArrayData/> */}

    {/* <button onClick={()=>setShowClock(!showClock)}> Hide/Show Clock </button>
    {showClock && <HandleClock />} <hr/> */}

    {/* <CollegeInfo/> */}
    
    {/* <UseEffect /> */}

    {/* <InlineStyle />
    < StyleComponent /> */}

    {/* <UncontrolledComponent /> */}

    <ForwardRef />
  </>
}
export default App;