
/*
Data can be passed from the parent to the child component via props.
But there is no direct way to pass data from the child to the parent component, 
We can pass the data using  a handler function.
*/
import {useState } from 'react';

function ComponentA(props){
    const [msg, setMessage] = useState("Good Morning!!!!");
    const setMsgFromChild = (message) => {
      setMessage(message);
    };
    return (
      <div>
        <h1>{msg}</h1>
        <ComponentB changeMessage={setMsgFromChild} />
      </div>
    );
}

function ComponentB(props){
    let msg = 'Goodbye';
    return (
      <div>
        <button onClick={() => props.changeMessage(msg)}>Change the Message</button>
      </div>
    );
}

function ChildToParentDataTest(){
    return <ComponentA ></ComponentA>;
}

export default ChildToParentDataTest;