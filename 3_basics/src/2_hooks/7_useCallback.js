import { useState, useCallback } from "react";

/*
Mmemoization as caching a value so that it does not need to be recalculated.
*/
/*The React useCallback Hook returns a memoized callback function*/

function Wish(props){
    console.log("Wish is rendered");
    return <h1>{props.wish}</h1>;
}

/*In the below example Wish components rerenders every time 
 count1 or count2 changes*/
function WithOutUseCallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <Wish wish="Happy Birthday"></Wish>
      <div>
        <h1>Counter1 = {count1}</h1>
        <button onClick={() => setCount1((count) => count + 1)}>
          {" "}
          Increse Counter 1
        </button>
      </div>
      <div>
        <h1>Counter2 = {count2}</h1>
        <button onClick={() => setCount2((count) => count + 1)}>
          {" "}
          Increse Counter 2
        </button>
      </div>
    </div>
  );
}

/*** With Use Call back **/ 

function WithUseCallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const getWish = useCallback(() => {
    return "Happy Birthday";
  }, [count1]);

  return (
    <div>
      <Wish wish={getWish}></Wish>
      <div>
        <h1>Counter1 = {count1}</h1>
        <button onClick={() => setCount1((count) => count + 1)}>
          {" "}
          Increse Counter 1
        </button>
      </div>
      <div>
        <h1>Counter2 = {count2}</h1>
        <button onClick={() => setCount2((count) => count + 1)}>
          {" "}
          Increse Counter 2
        </button>
      </div>
    </div>
  );
}

function UseCallBack() {
  //return <WithOutUseCallBack></WithOutUseCallBack>;
   return WithUseCallBack()
}

export default UseCallBack;
