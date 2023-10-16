import React, { useState, useEffect } from 'react';
import NavBarButton from 'components/App/NavBarButton';
import MenuHeader from 'components/App/MenuHeader';
import HeaderText from 'components/App/HeaderText';
import Participation from 'components/App/Participation';
import Carrousel from 'components/App/Carrousel';
import Footer from 'components/App/Footer';

import headerBackGround from "assets/images/headerBackGround.png";
import headerBackGroundLarge from "assets/images/headerBackGroundLarge.png";
  // Asegúrate de tener esta imagen

function App() {
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

  const backgroundStyle = {
    backgroundImage: windowWidth >= 670 ? `url(${headerBackGroundLarge})` : `url(${headerBackGround})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#F5F1ED',
  };
  const styles = {
    body: {
        height: '100%',
        margin: 0,
        padding: 0,
        background: '#F7F3EF',/* Sets the background color of the app to a light beige */

    }

};
  return (
    <div>
      <div style={backgroundStyle}>  
        <NavBarButton/>
        <HeaderText/>
        
        <MenuHeader/>
      </div>
      <div style={{ backgroundColor: '#F5F1ED'}}>     
      <Participation/>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: '#F5F1ED',   margin: '60px auto'}}>
  <Carrousel/>
</div>
  <Footer/>
    </div>
  );
}

export default App;
