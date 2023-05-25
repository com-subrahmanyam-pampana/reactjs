

function Component1(){
    return <p>Component1</p>
}

function Component2(){
    return <p>This is Comp2</p>
}

function test1(){
    /*This will render only Component1 because Component2 is 
    not used in the Component1
    */
    return (<div>
        <Component1>
          <Component2></Component2>
        </Component1>
      </div>);
    
}

/*Nesteeed component using props.children */
function ComponentA(props){
    return(
        <div>
          <h1>This is ComponentA</h1>
          {props.children}
        </div>
    );
}

function ComponentB(){
    return <p>This is ComponentB</p>
}

function test2(){
    return (<div>
        <ComponentA>
          <ComponentB></ComponentB>
          <ComponentB></ComponentB>
        </ComponentA>
      </div>);
}
function NestedComponentsTest(){
    //return test1();
    return test2();
}


export default NestedComponentsTest;