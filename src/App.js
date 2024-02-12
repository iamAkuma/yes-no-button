// App.js

import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file

const getRandomPosition = () => ({
  top: `${Math.random() * window.innerHeight}px`,
  left: `${Math.random() * window.innerWidth}px`,
});

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({}); // Initialize position as empty object
  const [message, setMessage] = useState(""); // State to store message
  const [showMessage, setShowMessage] = useState(false); // State to toggle message display

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

  // Function to handle click event on the "Yes" button
  const handleYesButtonClick = () => {
    setMessage("I knew it, bill's on you");
    setShowMessage(true); // Show message
  };

  return (
    <div className="container">
      <div className={`box ${showMessage ? 'message-displayed' : ''}`}>
        <div>
          <h1>Wanna go out with me?</h1>
        </div>
        <div className="buttons-container">
          {!showMessage && (
            <>
              <button className="button" onClick={handleYesButtonClick}>Yes</button>
              <button
                className="button"
                style={noButtonPosition}
                onMouseEnter={handleNoButtonHover}
              >
                No
              </button>
            </>
          )}
        </div>
        {showMessage && <p>{message}</p>} {/* Display message if it exists */}
      </div>
    </div>
  );
};

export default App;
