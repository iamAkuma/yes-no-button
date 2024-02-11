import React, { useState } from 'react';

const getRandomPosition = () => ({
  top: `${Math.random() * window.innerHeight}px`,
  left: `${Math.random() * window.innerWidth}px`,
});

const distanceThreshold = 150; // Threshold to ensure the button moves away from the mouse

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState(getRandomPosition());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleNoButtonHover = () => {
    let newPosition = getRandomPosition();
    while (
      Math.sqrt(
        Math.pow(newPosition.left - mousePosition.x, 2) + Math.pow(newPosition.top - mousePosition.y, 2)
      ) < distanceThreshold
    ) {
      newPosition = getRandomPosition();
    }
    setNoButtonPosition(newPosition);
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="box">
        <button className="button">Yes</button>
        <button className="button" style={noButtonPosition} onMouseEnter={handleNoButtonHover}>
          No
        </button>
      </div>
    </div>
  );
};

export default App;
