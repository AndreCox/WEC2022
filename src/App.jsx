import React, { useState } from 'react';
import './App.css';

function App() {
  // Return the App component.
  return (
    <div className="h-screen bg-zinc-800">
      <div class="flex justify-around">
        <div className="">
          <p className="text-white">Input</p>
          <input type="text" className="text-white" />
        </div>
        <div className="mt-4">
          <p className="text-white">Process Config</p>
          <input type="text" className="text-white" />
        </div>
        <div className="">
          <p className="text-white">Output</p>
          <input type="text" className="text-white" />
        </div>
        <div>
          <button
            class="text-white border rounded-lg p-3 mt-4"
            onClick={() => setonClick(true)}
          >
          Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
