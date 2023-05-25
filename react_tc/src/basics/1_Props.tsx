function CustomText(props:any){
    //In type script we need to defien the type of the props
    return <h1>{props.text}</h1>;
}
function SimpleTSPropTest(){
    let text="I am a simple prop"
    return (
        <div>
           <CustomText text={text}></CustomText> 
        </div>
    );
}
export default SimpleTSPropTest;