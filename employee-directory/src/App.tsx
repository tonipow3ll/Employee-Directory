import React from 'react';
import logo from './logo.svg';
import HomePage from '../src/views/homepage'
import './App.css';
import TestPage from './views/test';

function App() {
  return (
    <div className="App">
   
     {/* <p>Hello!</p> */}
     <HomePage />
     <TestPage />
    </div>
  );
}

export default App;
