import { useState, useEffect } from "react";
import { audioManager } from "../utils/audioUtils";

const TerminalLoader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [loadingDots, setLoadingDots] = useState("");
  const [showAudioPrompt, setShowAudioPrompt] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const fullText = "Welcome to Parth's portfolio";

  // Calculate remaining time based on progress
  const getRemainingTime = () => {
    const totalTime = 5; // 5 seconds total loading time
    const remainingProgress = 100 - progress;
    return (remainingProgress / 100) * totalTime;
  };

  // Handle user interaction to start audio
  const handleAudioEnable = async () => {
    if (!audioStarted && !loadingComplete) {
      await audioManager.initialize();

      // Calculate remaining time and adjust sound duration
      const remainingTime = getRemainingTime();
      await audioManager.createSirenSound(remainingTime);

      setAudioStarted(true);
      setShowAudioPrompt(false);
    }
  };

  // Dismiss audio prompt
  const dismissAudioPrompt = () => {
    setShowAudioPrompt(false);
  };

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
    // Animate progress bar over 5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setLoadingComplete(true);
          setShowAudioPrompt(false); // Hide audio prompt when loading is complete

          // Stop any playing siren sound when loading completes
          audioManager.stopSirenSound();

          return 100;
        }
        return prev + 100 / 50;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  // Auto-hide audio prompt after 10 seconds
  useEffect(() => {
    const autoHideTimer = setTimeout(() => {
      setShowAudioPrompt(false);
    }, 10000);

    return () => clearTimeout(autoHideTimer);
  }, []);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      audioManager.stopSirenSound();
    };
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
      {/* Optional Audio Notification - Top Right */}
      {showAudioPrompt && !loadingComplete && (
        <div className="fixed top-4 right-4 z-50 max-w-xs">
          <div className="bg-black/90 border border-green-400/50 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="text-green-400 text-xs font-bold">🔊 AUDIO</div>
              <button
                onClick={dismissAudioPrompt}
                className="text-green-400/60 hover:text-green-400 text-xs ml-2"
              >
                ✕
              </button>
            </div>
            <div className="text-green-400 text-xs mb-2">
              Enable sound for full experience
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleAudioEnable}
                className="bg-green-400/20 hover:bg-green-400/30 text-green-400 text-xs px-2 py-1 rounded border border-green-400/50 transition-colors"
              >
                Enable
              </button>
              <button
                onClick={dismissAudioPrompt}
                className="text-green-400/60 hover:text-green-400/80 text-xs px-2 py-1 transition-colors"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default TerminalLoader;
