
////IN react js ,we can create componect by using functions

function singleElement() {
    /*
    JSX stands for JavaScript XML.
    JSX is an optional HTML-like syntax.
    JSX allows us to write HTML in React.
    JSX makes it easier to write and add HTML in React.
    It allows us to create a virtual DOM tree and gets transpiled to JavaScript, 
    it evaluates to ReactElements. 
    JSX tags support the XML self close syntax so you can leave the closing tag off.
    */
    //If you want to return one statement then you can use one line
    return <h1>Hello Boss!!!!</h1>;
    //This stament is adding <h1> tag inside the JavaScript
}

function multipleElemenmts() {
    //If multiple statements are there you can use div.Place all the elements inside that
    return <div>
        <h1>Hello World!!!!</h1>
        <h1>How are you</h1>
    </div>;
}

function varibles1() {
    let name = "Subbu";
    /*To use varibles inside JSX elements put them in the {} */
    return <div>
        <h1>How are you</h1>
        <h1>{name}</h1>
    </div>;
}

function varibles2() {
    /*2+3 that we places inside {} will be evaluted and returns 5*/
    return <div>
        <h1>{2+3}</h1>
    </div>;
}

function ElementsTest() {
    //return singleElement();
    // return multipleElemenmts();
    //return varibles1();
    return varibles2();
}

export default ElementsTest;
