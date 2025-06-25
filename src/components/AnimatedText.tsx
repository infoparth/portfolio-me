import React, { useState, useEffect } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  isHTML?: boolean;
  onComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  speed = 50,
  isHTML = false,
  onComplete,
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const lines = text.split("\n");

    if (currentLineIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentLineIndex === lines.length && onComplete) {
      // Call onComplete when animation is finished
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, text, speed, onComplete]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
  }, [text]);

  const displayText = displayedLines.join("\n");

  if (isHTML) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: displayText }}
      />
    );
  }

  return (
    <span className={className}>
      {displayText}
      {currentLineIndex < text.split("\n").length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default AnimatedText;
