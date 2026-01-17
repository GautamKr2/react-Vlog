/*import { forwardRef } from "react";


function inputField(props, refe) {
    return <>
        <h1> Child forwardRef </h1>
        <input type="text" placeholder="Enter string" ref={refe} /> <br /> <br />
    </>
}
export default forwardRef(inputField);*/

function inputField(props) {
    return <>
        <h1> Child forwardRef </h1>
        <input type="text" ref={props.ref} /> <br /> <br />
    </>
}
export default inputField;