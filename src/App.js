import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const nayoks = [{name:'Jamal', age: 90}, {name:'Kamal', age:'33'}, {name:'Jihad', age:'37'}, {name: 'Shuvo', age:'23'}];
  const [nayoks, setNayoks] = useState([]);
  useEffect(()=>{
      fetch('https://randomuser.me/api/?results=50')
      // fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setNayoks(data));
  }, [])

  // $.ajax({
  //   url: 'https://randomuser.me/api/?results',
  //   dataType: 'json',
  //   success: function(data) {
  //     setNayoks(data);
  //   }
  // });
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        // nayoks && !!nayoks.length &&
       nayoks.results.map(nayok => <Nayok name={nayok.name.first} age={nayok.age} key={nayok.id}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  return (
    <div className="div">
      <button onClick={handleCount}>Add Movie</button>
      <h3>Number of Movies : {count}</h3>
      <MovieDisplay movies={count +10}></MovieDisplay>
      <MovieDisplay movies={count +20}></MovieDisplay>
      <MovieDisplay movies={count +30}></MovieDisplay>
      <MovieDisplay movies={count +40}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return (
    <h4>Movies i have acted: {props.movies} </h4>
  )
}

function Nayok(props){
  return (
    <div style={{ border: '2px dotted green' }}>
      <h1>Hello, I am nayok {props.name} </h1>
      <h3>I am {props.age} years old </h3>
    </div>
  )
}

export default App;
