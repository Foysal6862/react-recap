import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jamal', 'Kamal', 'Jihad', 'Shuvo'];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks[0]} age='30'></Nayok>
      <Nayok name={nayoks[1]} age='32'></Nayok>
      <Nayok name={nayoks[2]} age='34'></Nayok>
      <Nayok name ={nayoks[3]} age='35'></Nayok>
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
