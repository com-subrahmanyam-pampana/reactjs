
/*
Typescript React Component:
Function can takes props object and returns JSX data type.
*/

type TestProps1 = {
  user_name: string,
  user_id: number,
  dob?: string,
} 
function PropsUsingType(props:TestProps1){
  return (
    <>
        <h1>Welcome {props.user_name} !!!</h1>
    </>
);
}

function test1(){
  return <PropsUsingType user_name={'Subbu P'} user_id={0} ></PropsUsingType>
}

/*We can also use interface  in place of the type */

interface TestProps2 {
  user_name: string;
  user_id: number;
  dob?: string;
} 
function PropsUsingInterface(props:TestProps2){
  return (
    <>
        <h1>Welcome {props.user_name} !!!</h1>
    </>
);
}

function test2(){
  return <PropsUsingInterface user_name={'ElonMusk'} user_id={0} ></PropsUsingInterface>
}

function FunctionComponentTest() {
    //return test1();
    return test2();
}

export default FunctionComponentTest;