import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicApp from "./components/MusicApp";
import { useState } from "react";

import AlbumPage from "./components/AlbumPage";



function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsEntered(true);
      setIsAnimating(false);
    }, 1500);
  };

  if (!isEntered) {
    return <div className="">
      <EntrancePage isAnimating={isAnimating} onEnter={handleEnter} />;
    </div>
  }

  return (
    <Router>
      {/* Full viewport height container */}
      <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-black text-white">

        {/* Content area limited to 86vh and scrollable */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<div>


              <MusicApp />

            </div>
            } />

            <Route path="/album/:albumId" element={<AlbumPage />} />
          </Routes>
        </main>


      </div>
    </Router>
  );
}


function EntrancePage({ isAnimating, onEnter }) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>

      {/* Container */}
      <div className="w-[90%] max-w-6xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 flex flex-col md:flex-row overflow-y-auto
      overflow-x-hidden animate-shadow-pulse max-h-[90vh]">


        {/* Left: Glowing Image */}
        <div className="md:w-1/2 w-full relative overflow-hidden">
          <img
            src="https://i.pinimg.com/1200x/5d/d8/4e/5dd84ef6608a2fcac08db11cbd6074f6.jpg"
            alt="Music Cover"
            className="object-cover h-full w-full md:rounded-l-3xl md:rounded-r-none rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-purple-500/30 blur-2xl opacity-60 animate-pulse pointer-events-none"></div>
        </div>

        {/* Right: Text & Button */}
        <div className="md:w-1/2 w-full p-10 flex flex-col items-start text-left space-y-6 ">

          {/* Logo */}
          <div className="flex items-center space-x-3 ">

            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md mb-3">
              DeltaTune
            </h1>
          </div>

          <div
            style={{ fontFamily: 'DeterminationSans' }}
            className="min-w-[95%] min-h-[60%] border-4 border-white bg-black text-white p-4 text-3xl leading-tight tracking-wide fade-in"
          >
            * A strange device hums softly.<br />
            * It lets you stream music... <br />your way.<br />
            * Powered by React. <br />* Styled with Determination.<br />
          </div>





          {/* CTA Button */}
          <button
            onClick={onEnter}
            disabled={isAnimating}
            className="mt-5 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 cursor-pointer"
          >
            {isAnimating ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Entering...
              </span>
            ) : (
              'Enter Site'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}




export default App;

