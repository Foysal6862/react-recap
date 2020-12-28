import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jamal', 'Kamal', 'Jihad', 'Shuvo'];
  return (
    <div className="App">
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

function Nayok(props){
  console.log(props);
  return (
    <div style={{ border: '2px dotted green' }}>
      <h1>Hello, I am nayok {props.name} </h1>
      <h3>I am {props.age} years old </h3>
    </div>
  )
}

export default App;
