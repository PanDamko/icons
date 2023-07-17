import { useState } from 'react';
import './App.css';

import Answer from './components/Answer';
import Question from './components/Question';

function App() {
const [counter, setCounter] =useState(0);
const [widze, setWidze] =useState(true);
const handleIncrease = () =>{
setCounter(counter+1)
}
//   let counter = 0;
//   const incCounter = ()=>{counter++;
//   console.log("test");
// console.log(counter);}
  return (
    <div className='App'>
      <div className='column'>
        {/* <h2>{counter}</h2>
        <button onClick={incCounter}>Zwiększ o 1</button> */}
        <h2>{counter}</h2>
        <button onClick={()=>setWidze(!widze)}>{widze ? "widać" : "Nie widać"}</button>
        <button onClick={handleIncrease}>Zwiększ o 1</button>
        <button onClick={()=>{setCounter(counter-1)}}>Zwiększ o 1</button>
        <Question />
        {widze ? <Answer /> : ""}
        
      </div>
    </div>
  );
}

export default App;
