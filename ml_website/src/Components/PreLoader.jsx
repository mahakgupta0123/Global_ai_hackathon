import { useState, useEffect } from "react";
import Sparkle from "./Sparkle";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start button animation
    setTimeout(() => setStartAnimation(true), 2500);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 500);
          // Call onComplete to show the router
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-all duration-1000 ${
        fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
      style={{ backgroundColor: "#FFF5EE" }}
    >
      <Sparkle
        gridSize={10}
        density={30}
        gridColor="rgba(100,116,139,.22)"  // slate-500/22
        dotColor="rgba(100,116,139,.12)"
        sparkleColor="#ff0010"
      />
      {/* Your preloader content */}
      {/* <div className="text-red-400 text-2xl md:text-3xl font-bold text-center mb-8">
        Girls Leading Tech Presents
      </div>

      <div className="relative mb-8">
        <div className="w-55 h-55 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center relative overflow-hidden">
          <img src="./public/logo_red.png" alt="logo" className="w-50 h-50 object-contain z-10" />
        </div>
      </div> */}

      <div className="flex justify-center items-center mt-5 mb-10">
        <div className="text-shadow-lg/50 text-shadow-red-400 font-extrabold text-xl sm:text-xl md:text-4xl text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9 border-red-300 relative inline-block overflow-hidden">
          <h2 
            className="relative z-10 transition-colors duration-700 ease-in-out"
            style={{
              color: startAnimation ? 'rgb(55 65 81)' : 'rgb(248 113 113)'
            }}
          >
            Loading....
          </h2>
          <span 
            className="absolute inset-0 bg-red-400 transition-transform duration-1000 ease-in-out"
            style={{
              transform: startAnimation ? 'translateY(0%)' : 'translateY(100%)'
            }}
          ></span>
        </div>
      </div>
{/* 
      <div className="w-80 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="h-full bg-red-400 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
      
      <div className="text-red-600 mt-4 font-semibold">
        {Math.floor(progress)}%
      </div> */}
    </div>
  );
}