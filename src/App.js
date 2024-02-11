import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file

const getRandomPosition = () => ({
  top: `${Math.random() * window.innerHeight}px`,
  left: `${Math.random() * window.innerWidth}px`,
});

const distanceThreshold = 150; // Threshold to ensure the button moves away from the mouse

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({}); // Initialize position as empty object
  const [isButtonCentered, setIsButtonCentered] = useState(true); // State to check if button is centered

  // Function to center the button on page load
  useEffect(() => {
    const centerButton = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const buttonWidth = 100; // Adjust button width
      const buttonHeight = 40; // Adjust button height

      const centerLeft = (screenWidth - buttonWidth) / 2;

      // Set "No" button position
      setNoButtonPosition({ top: `${screenHeight / 2}px`, left: `${centerLeft + 120}px` }); // Adjusted for spacing

      setIsButtonCentered(true);
    };

    centerButton();
  }, []);

  // Function to handle hover event on the "No" button
  const handleNoButtonHover = () => {
    if (isButtonCentered) { // Check if button is centered
      setNoButtonPosition(getRandomPosition()); // Move button to random position
      setIsButtonCentered(false); // Update state to indicate button is no longer centered
    }
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
