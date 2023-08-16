

import  { useState, useEffect } from 'react';

const LatestFromBlog = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Update screen size when the window is resized
  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add a listener for window resize events
    window.addEventListener('resize', updateScreenSize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div>
      <p>Screen Width: {screenWidth}px</p>
      <p>Screen Height: {screenHeight}px</p>
    </div>
  );
};

export default LatestFromBlog;
