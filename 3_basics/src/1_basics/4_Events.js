/*
Just like HTML DOM events,In  React we  perform actions based on the user event.
Eg:click, mouseover,change etc.
*/


function simpleEvent(){
    const onButtonClick=()=>{alert("Hello!!!!!")}
    return <button onClick={onButtonClick}>Click Me!! I am an event</button>;
    //In HTML it looke like this
    //<button onclick="shoot()">Take the Shot!</button>
}

function simpleEvent2(){
    const onButtonClick=()=>{alert("Hello!!!!!")}
    return <button onClick={onButtonClick()}>Click Me!! I am an event</button>;
   /*There is a diffrence between onButtonClick and onButtonClick()
    If you pass onButtonClick,function is invoked on button click.
    If you pass onButtonClick(),function is invoked on element launch
   */
}

function UsingThisKeywordInEvent(){
    const onButtonClick=()=>{alert("Using This keyword in Event")}
    return <button onClick={this.onButtonClick}>Keyword this for event</button>;
    //It won't work
}

function bind(){
    const onButtonClick=()=>{alert("bind keyword")}
    return <button onClick={onButtonClick.bind(this)}>Click Me!!!</button>;
}

function passingDataToEvent(){
    const onButtonClick=(text)=>{alert(text)}
    return <button onClick={()=>onButtonClick("I am passing a simple text")}>Click Me!! I am an event</button>;
}

function MyEventTest(){
   //return simpleEvent();
   //return simpleEvent2();
   //return UsingThisKeywordInEvent();
   //return bind();
   return passingDataToEvent();
}


export default MyEventTest;