
import Hooks from './2_hooks/Hooks'
import Basics from './1_basics/BasicApp'

import ReduxTest from "./other/1_redux_test";
/*
MainApp will return a JSX element.
*/
function MainApp(){
    //return <Basics></Basics>;
    return <Hooks></Hooks>;
    //return <ReduxTest></ReduxTest>
}
export default MainApp;