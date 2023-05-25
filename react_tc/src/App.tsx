import logo from './logo.svg';
import './App.css';
import React from 'react';
import FunctionComponentTest from './basics/2_A_FunctionComponent'
import SimpleTSPropTest from './basics/1_Props';
import PropsWithGenericsTest from './basics/2_B_PropsWithGenerics';
function helloWorld(){
  return <h1>Hello World</h1>
}

function App() {
  //return helloWorld();
  //return SimpleTSPropTest();
  //return FunctionComponentTest();
  return PropsWithGenericsTest();
}

export default App;
