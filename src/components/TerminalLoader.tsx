import React, { useState, useEffect } from "react";
import { audioManager } from "../utils/audioUtils";

const TerminalLoader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [loadingDots, setLoadingDots] = useState("");

  const fullText = "Welcome to Parth's portfolio";

  useEffect(() => {
    // Initialize audio and play single siren sound
    const initAudio = async () => {
      await audioManager.initialize();
      audioManager.createSirenSound(); // Single siren instead of loop
    };

    initAudio();
  }, []);

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    // Animate the typing effect for the welcome text
    let textIndex = 0;
    const textInterval = setInterval(() => {
      if (textIndex < fullText.length) {
        setDisplayText(fullText.slice(0, textIndex + 1));
        textIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    // Animate loading dots
    let dotCount = 0;
    const dotInterval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      setLoadingDots(".".repeat(dotCount));
    }, 500);

    return () => clearInterval(dotInterval);
  }, []);

  useEffect(() => {
    // Animate progress bar over 7 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 100 / 50; // 100% over 5 seconds (50 steps of 100ms each)
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const amPm = date.getHours() >= 12 ? "PM" : "AM";
    const displayHours = date.getHours() % 12 || 12;

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${displayHours
      .toString()
      .padStart(
        2,
        "0"
      )}:${minutes}:${seconds} ${amPm} | ${month} ${day}, ${year}`;
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
      <div
        className="terminal-container relative"
        style={{
          filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))",
        }}
      >
        {/* Terminal Window */}
        <div
          className="bg-black border-2 border-green-400 rounded-lg p-8 max-w-2xl w-full relative overflow-hidden"
          style={{
            boxShadow: `
              0 0 20px rgba(34, 197, 94, 0.3),
              inset 0 0 20px rgba(34, 197, 94, 0.1)
            `,
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-green-400/5 rounded-lg"></div>
          <div className="absolute inset-0 border-2 border-green-400/30 rounded-lg animate-pulse"></div>

          {/* Flickering overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 animate-pulse"
            style={{
              background:
                "linear-gradient(45deg, transparent 48%, rgba(34, 197, 94, 0.03) 50%, transparent 52%)",
              animation: "flicker 3s infinite",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header with time */}
            <div className="text-green-400 text-sm mb-8 text-center font-bold tracking-wider">
              {formatTime(currentTime)}
            </div>

            {/* Welcome message */}
            <div className="text-center mb-12">
              <div
                className="text-green-400 text-5xl md:text-6xl font-black mb-4 tracking-wider"
                style={{
                  filter: "blur(0.5px)",
                  textShadow:
                    "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)",
                  fontWeight: 900,
                }}
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Processing text */}
            <div className="text-green-400 text-lg mb-6 text-center">
              processing{loadingDots}
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="bg-gray-800 border border-green-400 rounded h-8 relative overflow-hidden">
                <div
                  className="bg-green-400 h-full transition-all duration-100 ease-linear relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500"></div>
                  <div className="absolute inset-0 animate-pulse bg-green-200/30"></div>
                </div>
              </div>

              {/* Progress percentage */}
              <div className="flex justify-between text-green-400 text-sm mt-2 font-bold">
                <span>{Math.floor(progress)}%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-green-400 text-sm">
              <span>parthverma.me</span>
              <span>#2025</span>
            </div>
          </div>
        </div>

        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-green-400/10 rounded-lg blur-xl scale-110 -z-10"></div>
      </div>

      {/* Custom CSS for flicker animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes flicker {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `,
        }}
      />
    </div>
  );
};

export default TerminalLoader;
