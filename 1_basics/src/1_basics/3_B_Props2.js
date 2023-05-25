

function BinaryOperations(props){
    let a=props.operand1;
    let b=props.operand2;
    let operation=props.operation;
    let result=null;
    if(operation === 'sum'){
        result=a+b;
    }else if(operation === 'sub'){
        result=a-b;
    }
    else if(operation === 'mul'){
        result=a*b;
    }
    else{
        result=a/b;
    }
    return <h1>{result}</h1>;
}

function SimplePropTest2(){
    return (
        <div>
           <BinaryOperations operand1={10} operand2={5} operation='sum' ></BinaryOperations> 
        </div>
    );
}

export default SimplePropTest2;