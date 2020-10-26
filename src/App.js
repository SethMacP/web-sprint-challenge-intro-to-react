import React from 'react';
import Characters from "./components/Characters";
import './App.css';



const App = () => {

  return (
    <div className="App">
      <div>
        <h1 className="Header">Characters</h1>
        <Characters />
        </div>
     </div>
    );
}

export default App;
