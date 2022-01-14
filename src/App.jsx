import React, { useState } from 'react';
import './App.css';

function App() {
  // Return the App component.
  return (
    <div className="h-screen bg-zinc-800">
      <div>
        <div className="">
          <p className="text-white">Input</p>
          <input type="text" className="text-white" />
        </div>
        <div className="mt-4">
          <p className="text-white">Process Config</p>
          <input type="text" className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default App;
