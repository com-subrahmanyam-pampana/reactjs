
function getNewYearMessage(){
    return <h1>Happy New Year 🎊</h1>;
}
function getChristmasMessage(){
    return <h1>Merry christmas 🎅</h1>;
}
function getDiwaliMessage(){
    return <h1>Happy Diwali 🪔</h1>;  
}

/*If statement*/
function FestivalWishes(props){
    if(props.wish===1){
        return getChristmasMessage();
    }else if (props.wish===2){
        return getDiwaliMessage();
    }else{
        return getNewYearMessage();
    } 
}

/*Ternary*/
function evenNumber(number){
    return <h1>{number} is an even number</h1>;  
}
function oddNumber(number){
    return <h1>{number} is a odd number</h1>;  
}

function TereneryComponent(props){
    let number=props.number;
    return <div>{(number%2===0)?evenNumber(number):oddNumber(number)}</div> 
}

function LogicalAnd(props){
    /*If players are 11,we will show a message otherwise it will render nothiing */
    let playersArray=props.team;
    return <div>{playersArray.length===11 && <p>Football team is ready to play</p>}</div>
}

function LogicalOR(props){
    
}

function ConditionalTest(){
    //return <FestivalWishes wish={6}></FestivalWishes>;
    //return <TereneryComponent number={7}></TereneryComponent>
    return <LogicalAnd team={["Lionel Messi","Cristiano Ronaldo","Neymar","Subbu","Kevin","Riyad","Sadio","Dijk","Z","X","Y"]}></LogicalAnd>
}

export default ConditionalTest;