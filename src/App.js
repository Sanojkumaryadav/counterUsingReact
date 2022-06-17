import React from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);

  let handleIncrements = (value) =>{
    setCounter(counter + value);
  };
  let handleDecrements = (value) =>{
    setCounter(counter - value);
  };
  let handleDoubles = (value) =>{
    setCounter(counter * value)
  }
  return (
    <div className="App">
     <h1>Counter</h1>
     <h1 style={counter % 2===0 ? {color:'green'} : {color:'red'}}>{counter}</h1>
     <button onClick={()=>handleIncrements(1)}>Increments</button>
     <button onClick={()=>handleDecrements(1)}>decrements</button>
     <button onClick={()=>handleDoubles(2)}>double</button>
    </div>
  );
}

export default App;
