import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [advice, setAdvice] = useState('');


  useEffect(() => {
    getAdvice();
  }, [])

  const getAdvice = async() => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    setAdvice(data.activity)
  }


  
  
  return (
    <div className="App">

      <div className="container">
        <h1>Random Advice Generator</h1>
      </div>

      <div className="container">
        <p>{advice}</p>
      </div>

      <div className="container">
        <button onClick={getAdvice}>Get advice</button>
      </div>
      
    </div>
  );
}

export default App;
