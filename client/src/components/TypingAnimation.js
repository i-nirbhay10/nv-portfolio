import React, { useState, useEffect } from "react";

const TypingAnimation = ({ texts, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      const timer = setInterval(() => {
        if (currentIndex < currentText.length) {
          setDisplayText((prevText) => prevText + currentText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(timer);
    } else {
      const backspaceTimer = setInterval(() => {
        if (currentIndex > 0) {
          setDisplayText((prevText) => prevText.slice(0, prevText.length - 1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          clearInterval(backspaceTimer);
          setIsTyping(true);
          setCurrentTextIndex((prevIndex) =>
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, speed / 2); // Adjust the speed of backspacing here

      return () => clearInterval(backspaceTimer);
    }
  }, [texts, speed, currentIndex, currentTextIndex, isTyping]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Adjust the blinking speed of the cursor here (in milliseconds)

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="text-info capitalize">
      <span>{displayText}</span>
      {showCursor && <span>|</span>}
    </div>
  );
};

export default TypingAnimation;
