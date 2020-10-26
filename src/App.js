import React from 'react';
import Characters from "./components/Characters";
import './App.css';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

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
