import React,{useState} from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState('');
  return (
    <div className="App">
      <header className="App-header">
       calcucalor
       <div className="calculator">
         <input className="output" type="string" value={output}/>
        <div className="numpad">
          <button className="button" onClick={()=>setOutput(output+'9')} >9</button>
          <button className="button"  onClick={()=>setOutput(output+'8')} >8</button>
          <button className="button"  onClick={()=>setOutput(output+'7')} >7</button>
          <button className="button"  onClick={()=>setOutput(output+'6')} >6</button>
          <button className="button"  onClick={()=>setOutput(output+'5')} >5</button>
          <button className="button"  onClick={()=>setOutput(output+'4')} >4</button>
          <button className="button"  onClick={()=>setOutput(output+'3')} >3</button>
          <button className="button"  onClick={()=>setOutput(output+'2')} >2</button>
          <button className="button"  onClick={()=>setOutput(output+'1')} >1</button>
          <button className="button"  onClick={()=>setOutput(output+'0')} >0</button>
          <button className="button"  onClick={()=>setOutput(output+'.')} >.</button>
          <button className="button"  onClick={()=>setOutput('')} >C</button>
        </div>
        <div className="operator">
          <button className="button"onClick={()=>setOutput(output+'+')} >+</button>
          <button className="button"onClick={()=>setOutput(output+'-')} >-</button>
          <button className="button"onClick={()=>setOutput(output+'*')} >X</button>
          <button className="button"onClick={()=>setOutput(output+'/')} >/</button>
        </div>
        <div className="enter" onClick={()=>setOutput(eval(output))}> Enter</div>

      </div>
      </header>
    </div>
  );
}

export default App;
