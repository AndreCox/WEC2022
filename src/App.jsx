import React, { PureComponent, useState } from 'react';
import { ProcessCrane, RandomizeArray, FindProcess } from './CraneProcess';
import HandleArray from './HandleArrays';
import './App.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function App() {
  const [inputArr, setInputArr] = useState([]);
  const [processArr, setProcessArr] = useState([]);
  const [outputArr, setOutputArr] = useState([]);

  const [inputVal, setInputVal] = useState('');
  const [processVal, setProcessVal] = useState('');
  const [outputVal, setOutputVal] = useState('');

  /*const data = Create(inputArr);*/

  const Clear = () => {
    setInputVal('');
    setInputArr([]);
    setOutputVal('');
    setOutputArr([]);
    setProcessVal('');
    setProcessVal([]);
    ProcessCrane([], [], true);
  };

  const Randomize = () => {
    console.log('Randomize');
    if (inputArr !== null) {
      console.log('inputArr: ', inputArr);
      let randomArr = RandomizeArray(inputArr);
      setInputVal(randomArr.join(', '));
      setInputArr(randomArr);
    }
  };

  let testInput = [3, 1, 2, 1, 4, 0, 1];
  let testProcess = [3, 2, 2, 2, 2, 4, 1, 3, 1, 4, 0];

  console.log(ProcessCrane(testInput, testProcess, false));

  const Input = (data) => {
    if (HandleArray(data).length === 0) {
      setInputVal('');
      setInputArr([]);
    }
    setInputVal(HandleArray(data).join(', '));
    setInputArr(HandleArray(data));
    setOutputVal(HandleArray(data).join(', '));
    setOutputArr(HandleArray(data));
    if (outputArr.length === 0) {
      setInputVal(HandleArray(data).join(', '));
    }
  };

  const Process = (data) => {
    if (HandleArray(data).length === 0) {
      setProcessVal('');
      setProcessArr([]);
    }
    setProcessVal(HandleArray(data).join(', '));
    setProcessArr(HandleArray(data));
    if (outputArr.length === 0) {
      setOutputVal(ProcessCrane(inputArr, HandleArray(data), false).join(', '));
    }
  };

  const Output = (data) => {
    if (HandleArray(data).length === 0) {
      setOutputVal('');
      setOutputArr([]);
    }
    setOutputVal(HandleArray(data).join(', '));
    setOutputArr(HandleArray(data));
  };

  // Return the App component.
  return (
    <div>
      <div className="bg-zinc-500 h-screen">
        <div class="bg-slate-800 flex opacity-3 drop-shadow-2xl shadow shadow-black mb-4">
          <img
            class="h-12 m-6"
            src="https://www.pinclipart.com/picdir/big/226-2267604_crane-clipart-cartoon-construction-png-download.png"
            alt=""
          />
          <div class="flex justify-between items-center px-10">
            <header class="text-center text-white p-5 text-xl text-bold hover:text-yellow-400 transition-all delay-100">
              QuickBuy Inc.
            </header>
            <a
              class="text-center text-white p-5 text-xl text-bold hover:text-yellow-400 transition-all delay-100"
              href="https://www.westernengineeringcompetition.com/"
            >
              WEC 2022
            </a>
            <a
              class="text-center text-white p-5 text-xl text-bold hover:text-yellow-400 transition-all delay-100"
              href="https://github.com/AndreCox/WEC2022/blob/master/README.md"
            >
              Design Document
            </a>
            <a
              class="text-center text-white p-5 text-xl text-bold hover:text-yellow-400 transition-all delay-100"
              href="https://github.com/AndreCox/WEC2022/blob/master/README.md"
            >
              User Manual
            </a>
          </div>
        </div>

        <div class="from-slate-500 to-zinc-800 h-6"></div>

        <div class="flex justify-around">
          <div className="">
            <p className="text-white pb-2 text-center text-lg">Input</p>
            <input
              type="text"
              className="rounded-lg text-black drop-shadow-2xl shadow shadow-black p-2"
              onInput={(e) => Input(e.target.value)}
              value={inputVal}
            />
          </div>
          <div className="">
            <p className="text-white pb-2 text-center text-lg">
              Process Config
            </p>
            <input
              type="text"
              className="rounded-lg text-black drop-shadow-2xl shadow shadow-black p-2"
              onInput={(e) => Process(e.target.value)}
              value={processVal}
            />
          </div>
          <div className="">
            <p className="text-white pb-2 text-center text-lg">Output</p>
            <input
              type="text"
              className="rounded-lg text-black drop-shadow-2xl shadow shadow-black p-2"
              onInput={(e) => Output(e.target.value)}
              value={outputVal}
            />
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <div>
            <button
              class="m-4 drop-shadow-2xl shadow shadow-black text-white border rounded-lg p-3 mt-3 hover:bg-white hover:text-black transition-all delay-100"
              onClick={() => Randomize()}
            >
              Randomize
            </button>
          </div>
          <div>
            <button
              class="m-4 drop-shadow-2xl shadow shadow-black text-white border rounded-lg p-3 mt-3 hover:bg-white hover:text-black transition-all delay-100"
              onClick={() => Clear()}
            >
              Clear
            </button>
          </div>
        </div>

        <div class="flex justify-around items-center m-4 text-white"></div>
        <div class="flex justify-around items-center">
          <div>
            <img
              class="h-14"
              src="https://www.onlygfx.com/wp-content/uploads/2021/07/red-sticker-arrow-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <footer class="flex items-center justify-center bg-slate-800 shadow-top">
        <img
          class="h-14 m-4"
          src="https://www.pinclipart.com/picdir/big/226-2267604_crane-clipart-cartoon-construction-png-download.png"
          alt=""
        />
        <div class="text-white text-center m-4">
          <div>Software Development Inc.</div>
          <div>
            Unauthorized Reproduction of this Content in Illegal Under Section
            23.4 A-C of the US Federal Code
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
