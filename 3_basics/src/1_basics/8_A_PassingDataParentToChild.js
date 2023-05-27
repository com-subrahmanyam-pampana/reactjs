/*
Data can be passed from the parent to the child component via props.
*/


function ComponentA(props){
    return(
        <div>
          <h1>Welcome to WonderWorld {props.playerName}</h1>
          <p1>Play Now</p1>
          <ComponentB playerName={props.playerName}></ComponentB>
        </div>
    );
}

function ComponentB(props){
   return (<div>
      <p1>Playing.......</p1>
      <ComponentC playerName={props.playerName} ></ComponentC>
   </div>)
}

function ComponentC(props){
    return (<div>
       <p1>Game Ended</p1>
       <h1> Well played {props.playerName}</h1>
    </div>)
 }

function ParentToChildDataTest(){
    //return test1();
    return <ComponentA playerName='subbu'></ComponentA>;
}


export default ParentToChildDataTest;