import React, {useState} from "react";

function Greeting(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Greeting;