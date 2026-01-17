import { useRef } from 'react';
import ForwardRef from './forwardRefC';

export default function forwardRef() {
    const inputRef = useRef();

    function handleInput() {
        inputRef.current.focus();
        inputRef.current.value = 124;
        inputRef.current.style.color = 'red';
        inputRef.current.style.backgroundColor = 'lightgreen';
    }

    return <>
        <h1> Use of forward ref in React </h1>
        <ForwardRef ref={inputRef}/>
        {/* <input type="text" placeholder='Enter string' ref={inputRef} /> <br /> <br /> */}
        <button onClick={handleInput}> Handle Input </button>
    </>
}