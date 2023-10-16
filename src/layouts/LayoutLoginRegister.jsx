import React, { useState, useEffect } from 'react';

// Importing components for the layout
import Navbar from 'components/App/Navbar';
import RegisterLogin from 'components/App/RegisterLogin';
import Footer from 'components/App/Footer';

// Importing images used in the layout
import headerBackGround from "assets/images/headerBackGround.png";
import headerBackGroundLarge from "assets/images/headerBackGroundLarge.png";
// Ensure you have this image in the specified path

/**
 * LayoutLoginRegister is a component responsible for rendering the layout of the login and registration pages.
 */
function LayoutLoginRegister() {

  // State for storing the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect hook for listening to window resize events to update the window width state
  useEffect(() => {

    // Function to update the window width state when window size changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    // Add an event listener to the window for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup: remove the event listener from the window when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []); // The empty array dependency ensures this effect runs once when the component mounts and cleans up on unmount

  // Styles for various elements in the component
  const styles = {
    body: {
      height: '100%',
      margin: 0,
      padding: 0,
      background: '#F7F3EF', // Sets the background color of the app to a light beige
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      margin: '65px',
      gap: '16px'
    },
  };

  return (
    <div>
      <Navbar/>
      <div style={styles.container}>
        <RegisterLogin/>
      </div>
      <Footer/>
    </div>
  );
}

export default LayoutLoginRegister;
