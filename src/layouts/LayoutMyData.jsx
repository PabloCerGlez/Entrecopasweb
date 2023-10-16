import React, { useState, useEffect } from 'react';
import Navbar from 'components/App/Navbar';
import MyData from 'components/App/MyData';
import Footer from 'components/App/Footer';
import BackButton from 'components/App/BackButton'

import headerBackGround from "assets/images/headerBackGround.png";
import headerBackGroundLarge from "assets/images/headerBackGroundLarge.png";
  // Asegúrate de tener esta imagen

function LayoutMyData() {
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
      marginTop: '0',

      gap: '16px'
  },
  footer:{
    marginTop:'-30px',

  },
  BackButton:{
    marginTop: '130px',
    marginLeft: '30px',
    marginBottom: '-20px',

    alignItems: 'left',
  }

};
  return (
    <div>
       <Navbar/>
       <div style={styles.BackButton}>

<BackButton/>   

</div>
      <div style={styles.container}>  
      <MyData/>

      </div>
     
  <div style={styles.footer}>
  <Footer/>

  </div>
    </div>
  );
}

export default LayoutMyData;
