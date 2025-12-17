'use client';

import { useEffect, useState } from 'react';

const slogans = [
  "Turn chats into apps",
  "Prompt. Ship. Repeat.",
  "Build anything from a chat",
  "Ideas → Apps, instantly",
  "From zero to MVP in minutes",
  "Your cofounder in the command line",
  "Draft, iterate, deploy",
  "Ship faster than you can type",
  "Design in text, deliver in code",
  "Dream it. Prompt it. Run it.",
  "Chat-native app building",
  "From prompt to product",
  "One prompt, infinite apps",
  "Stop scaffolding. Start shipping.",
  "Prototype at the speed of thought",
  "Make conversations executable"
];

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
        setIsVisible(true);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      {/* Hero section with aurora background */}
      <div className="relative h-[100dvh] w-full overflow-hidden">
        {/* Enhanced animated aurora background layers */}
        <div className="absolute inset-0 bg-aurora-layer-1" />
        <div className="absolute inset-0 bg-aurora-layer-2" />
        <div className="absolute inset-0 bg-aurora-layer-3" />
        
        {/* Floating particles overlay */}
        <div className="absolute inset-0 bg-particles" />
        
        {/* Main content - centered */}
        <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <h1 className="text-center text-[clamp(28px,6vw,64px)] font-medium tracking-tight mb-4">
            Turn Chats into Apps
          </h1>
          
          {/* Rotating slogans */}
          <div className="mt-4 h-8 md:h-10 overflow-hidden flex items-center justify-center">
            <span
              className={`inline-block text-center text-[clamp(18px,3vw,32px)] font-light transition-all duration-[400ms] ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              {slogans[currentIndex]}
            </span>
          </div>
        </main>
        
        {/* Start Prompting arrow pointing left - bottom left */}
        <div className="absolute left-6 md:left-8 bottom-[5%] z-20 flex items-center gap-3 arrow-point-left">
          <div className="flex items-center gap-2 text-white/80 font-medium text-sm md:text-base">
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 animate-bounce-horizontal" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Start prompting</span>
          </div>
        </div>
      </div>

      {/* Tall scrollable section */}
      <div className="relative min-h-[3000px] w-full bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="sticky top-0 p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Scroll Test Section</h2>
          <p className="text-xl text-white/70">This section is 3000px tall to test scrolling</p>
        </div>
        
        {/* Markers every 500px */}
        <div className="absolute top-[500px] left-1/2 -translate-x-1/2 text-center">
          <div className="text-6xl font-bold text-purple-500/50">500px</div>
        </div>
        <div className="absolute top-[1000px] left-1/2 -translate-x-1/2 text-center">
          <div className="text-6xl font-bold text-purple-500/50">1000px</div>
        </div>
        <div className="absolute top-[1500px] left-1/2 -translate-x-1/2 text-center">
          <div className="text-6xl font-bold text-purple-500/50">1500px</div>
        </div>
        <div className="absolute top-[2000px] left-1/2 -translate-x-1/2 text-center">
          <div className="text-6xl font-bold text-purple-500/50">2000px</div>
        </div>
        <div className="absolute top-[2500px] left-1/2 -translate-x-1/2 text-center">
          <div className="text-6xl font-bold text-purple-500/50">2500px</div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="text-6xl font-bold text-green-500/70">Bottom (3000px)</div>
        </div>
      </div>
    </div>
  );
}

