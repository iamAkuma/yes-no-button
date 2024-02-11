import React, { useState } from 'react';

const getRandomPosition = () => ({
  top: `${Math.random() * 70}vh`,
  left: `${Math.random() * 70}vw`,
});

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState(getRandomPosition());

  const handleNoButtonClick = () => {
    setNoButtonPosition(getRandomPosition());
  };

  return (
    <div className="container"> {/* Use className instead of style */}
      <div className="box"> {/* Use className instead of style */}
        <button className="button">Yes</button> {/* Use className instead of style */}
        <button className="button" style={noButtonPosition} onClick={handleNoButtonClick}>
          No
        </button>
      </div>
    </div>
  );
};

export default App;
