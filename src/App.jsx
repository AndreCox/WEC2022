import React, { useState } from 'react';
import './App.css';

function App() {
  //create a state to store the cat image
  const [cat, setCat] = useState('https://cataas.com/cat');
  const [loading, setLoading] = useState('Obtain Cat');

  async function handleClick() {
    console.log('clicked');
    setLoading('Loading...');
    //run an animation to change the cat image

    //get a new cat image from cataas without caching

    let response = await fetch('https://cataas.com/cat', {
      cache: 'no-store',
    });
    var urlCreator = window.URL || window.webkitURL;
    let imgUrl = urlCreator.createObjectURL(await response.blob());
    console.log(imgUrl);
    setCat(imgUrl);
    setLoading('Obtain Cat');
  }

  // Return the App component.
  return (
    <div className="h-screen bg-zinc-800">
      <div className="flex items-center justify-center">
        <div className="flex flex-col h-screen justify-center space-y-5">
          <div>
            <img
              className="text-white rounded-xl border-white border-2"
              src={cat}
              alt="kitten"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="mt-4 text-white bg-gradient-to-br from-orange-600 to-pink-600 rounded-2xl p-2 text-xl hover:text-2xl transition-all active:text-lg border-2 border-white justify-self-center"
              onClick={handleClick}
            >
              {loading}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
