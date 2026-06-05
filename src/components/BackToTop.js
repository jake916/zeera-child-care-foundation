"use client";
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll depth
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case page starts scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress settings
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 right-8 z-[99] transition-all duration-500 flex items-center justify-center ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-75 pointer-events-none"
      }`}
    >
      {/* Scroll Progress Ring */}
      <svg className="w-16 h-16 transform -rotate-90 absolute">
        {/* Track circle (glassmorphic backdrop) */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          className="stroke-black/5 fill-white/80 backdrop-blur-md"
          strokeWidth="3.5"
        />
        {/* Progress circle (fills as you scroll) */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          className="stroke-secondary fill-none transition-all duration-100"
          strokeWidth="3.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Back to Top Arrow Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="w-11 h-11 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:bg-foreground hover:text-background hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-10"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
