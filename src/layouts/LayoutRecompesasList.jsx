import React, { useState, useEffect } from 'react';
import Navbar from 'components/App/Navbar';
import CentroAyuda from 'components/App/RecompesaList';
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

      gap: '16px'
  },
  BackButton:{
    alignItems: 'left',
    position: 'absolute',
  }

};
  return (
    <div>
       <Navbar/>
     
      <div style={styles.container}>  

        <CentroAyuda/>

      </div>
     
  
  <Footer/>
    </div>
  );
}

export default LayoutTerm;
