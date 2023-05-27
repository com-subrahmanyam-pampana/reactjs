import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function MyButton() {
  const [btnColor, setButtonColor] = useState('green');
  return (
    <div >
      <p>Button Test</p>
      <div>
        <button
          style={{ width: "100px", height: "50px", backgroundColor: btnColor }}
          onClick={() => setButtonColor('blue')}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div >
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hello Subbu
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton></MyButton>
      </header>
    </div>
  );
}

export default App;
