import React from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}


export default App;
