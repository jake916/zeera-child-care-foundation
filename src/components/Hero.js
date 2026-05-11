"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/young-african-children-outdoor.jpg",
  "/african-children-enjoying-life.jpg",
  "/african-kids-enjoying-life (1).jpg",
  "/african-kids-enjoying-life.jpg",
  "/close-up-man-holding-kid-shoulders.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background Slider - Shared */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* MOBILE VIEW - (Optimized and Finalized) */}
      <div className="flex-1 md:hidden flex flex-col items-center justify-center relative z-20 px-6 text-center animate-slide-up">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-6 leading-[1.1] uppercase">
            Every child deserves <br />
            <span className="text-primary">a chance to live.</span>
          </h1>

          <p className="text-base text-white/80 max-w-sm mb-10 leading-relaxed font-medium">
            We stand in the gap for vulnerable children who cannot access the medical care they need—one child at a time.
          </p>

          <div className="flex flex-col gap-4 w-full">
            <button className="bg-secondary text-white py-5 rounded-full font-bold text-lg active:scale-95 transition-transform uppercase tracking-widest shadow-xl shadow-secondary/20">
              Donate Today
            </button>
            <button className="bg-white text-secondary py-5 rounded-full font-bold text-lg active:scale-95 transition-transform uppercase tracking-widest">
              See Our Work
            </button>
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="absolute bottom-10 left-0 w-full opacity-30 grayscale overflow-hidden">
          <div className="flex gap-8 animate-scroll whitespace-nowrap text-white text-xs font-black uppercase tracking-tighter">
            <span>UNICEF</span>
            <span>WHO</span>
            <span>Save the Children</span>
            <span>Red Cross</span>
            <span>Oxfam</span>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW - (Independent for Fine-tuning) */}
      <div className="hidden md:flex flex-1 flex-col items-center justify-center relative z-20 px-12 text-center animate-slide-up">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <h1 className="text-8xl lg:text-[5rem] font-black tracking-tighter text-white mb-8 leading-[0.85] mt-32">
            Every child deserves <br />
            <span className="text-primary">a chance to live.</span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mb-14 leading-relaxed font-medium tracking-tight">
            We stand in the gap for vulnerable children who cannot access the medical care they need paying bills, funding surgeries, and saving lives in Lagos, one child at a time.
          </p>

          <div className="flex items-center justify-center gap-8">
            <button className="bg-secondary text-white px-12 py-6 rounded-full font-black text-xl hover:scale-110 transition-all hover:shadow-[0_0_50px_rgba(255,87,51,0.4)] uppercase tracking-widest">
              Donate Today
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-black transition-all uppercase tracking-widest">
              See Our Work
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
