import React, { FC } from 'react';
/*
Typescript React Component:
Function can takes props object and returns JSX data type.
*/

type TestProps1 = {
  user_name: string,
  user_id: number,
  dob?: string,
} 
const PropsUsingType:FC<TestProps1>=(props)=>{
  return (
    <>
        <h1>Welcome {props.user_name} !!!</h1>
    </>
);
}
/*You can also the Object destructring */
const PropsUsingType2:FC<TestProps1>=({user_name,user_id,dob="Jan20"})=>{
  return (
    <>
        <h1>Welcome {user_name} !!!</h1>
    </>
);
}

function test1(){
  return <PropsUsingType user_name={'Subrahmanyam'} user_id={0} ></PropsUsingType>
}

/*We can also use interface  in place of the type */

interface TestProps2 {
  user_name: string;
  user_id: number;
  dob?: string;
} 
const PropsUsingInterface:FC<TestProps2>=(props:TestProps2)=>{
  return (
    <>
        <h1>Welcome {props.user_name} !!!</h1>
    </>
);
}

function test2(){
  return <PropsUsingInterface user_name={'D Trump'} user_id={0} ></PropsUsingInterface>
}

function PropsWithGenericsTest() {
    return test1();
    //return test2();
}

export default PropsWithGenericsTest;