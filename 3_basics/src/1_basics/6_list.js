


function ListTest(){
    const students=["Raju","Ram","Trump"]
    return (<div>
       <ul>
       {students.map((student)=><p>{student}</p>)}
       </ul>
    </div>);
}


export default ListTest;