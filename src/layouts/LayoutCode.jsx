import React, { useState, useEffect } from 'react';
import Navbar from 'components/App/Navbar';
import HeaderProfile from 'components/App/HeaderProfile';
// Así debes importarlo si estás usando export default
import UserProfile from 'components/App/UserProfile';

import Footer from 'components/App/Footer';
import BackButton from 'components/App/BackButton'

function LayoutTerm() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);


  const styles = {
    body: {
        height: '100%',
        margin: 0,
        padding: 0,
        background: '#F7F3EF',/* Sets the background color of the app to a light beige */

    },
    container: {

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      margin: '65px',
      marginTop: '-25px',

      gap: '16px'
  },
  BackButton:{
    alignItems: 'left',
    position: 'absolute',
  }

};
  return (
    <div>
      

      <div style={styles.container}>  

      <HeaderProfile/>

      </div>
      <UserProfile/>

      
  
  <Footer/>
    </div>
  );
}

export default LayoutTerm;
