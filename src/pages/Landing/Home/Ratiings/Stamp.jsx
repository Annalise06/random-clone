import React, { useState, useEffect } from "react";
import "./AnimatedCircleText.css"; // Create this CSS fil
import { GrStar } from "react-icons/gr";

const Stamp = ({ text }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);
  return (
    <div className="circle-container">
      {letters.map((letter, index) => (
        <div
          key={index}
          className="circle-letter"
          style={{
            transform: `rotate(${
              (360 / letters.length) * index
            }deg) translateX(100px) rotate(-${
              (360 / letters.length) * index
            }deg)`,
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default Stamp;
