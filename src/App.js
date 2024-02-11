import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file

const getRandomPosition = () => ({
  top: `${Math.random() * window.innerHeight}px`,
  left: `${Math.random() * window.innerWidth}px`,
});

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({}); // Initialize position as empty object

  // Function to center the button on page load
  useEffect(() => {
    const centerButton = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const buttonWidth = 100; // Adjust button width

      const centerLeft = (screenWidth - buttonWidth) / 2;

      // Set "No" button position
      setNoButtonPosition({ top: `${screenHeight / 2}px`, left: `${centerLeft + 120}px` }); // Adjusted for spacing
    };

    centerButton();
  }, []);

  // Function to handle hover event on the "No" button
  const handleNoButtonHover = () => {
    const newPosition = getRandomPosition(); // Get a new random position
    setNoButtonPosition(newPosition); // Move button to the new random position
  };

  return (
    <div className="container">
      <div className="box">
        <button className="button">Yes</button>
        <button
          className="button"
          style={noButtonPosition}
          onMouseEnter={handleNoButtonHover}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
