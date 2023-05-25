/*
React components are written in plain JavaScript, instead of template languages or the HTML 
directives traditionally used for web application UIs.
*/

function CustomText(){
    //This is a react Functional Component
    let text="Hello I am a Functional Component"
    return <h1>{text}</h1>;
}

function FunctionlComponentTest(){
    return <CustomText></CustomText> ;
    // return (
    //     <div>
    //        <CustomText></CustomText> 
    //     </div>
    // );
}

export default FunctionlComponentTest;