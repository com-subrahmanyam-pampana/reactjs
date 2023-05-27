
import { useState, useEffect } from "react";
//In the following code, we are fetching data in our Home component and displaying it.

const Home = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);
  
    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
  };
  
  //Move the fetch logic to a new file to be used as a custom Hook:

  const useFetch = (url) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);
  
    return [data];
  };

  const Home2 = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
  };