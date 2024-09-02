import React from 'react';
import Menu from './App.js';
import ReactDOM from 'react-dom';
import "./App.css";
import Content from './content.js';
function App() {
  return (
    <div className="App">
      <Menu />
      <Content/>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
