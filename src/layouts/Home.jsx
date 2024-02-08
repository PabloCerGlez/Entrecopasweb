import React, { useState, useEffect } from 'react';
import NavBarButton from 'components/App/NavBarButton';
import MenuHeader from 'components/App/MenuHeader';
import HeaderText from 'components/App/HeaderText';
import Participation from 'components/App/Participation';
import Carrousel from 'components/App/Carrousel';
import Footer from 'components/App/Footer';

const API_URL = 'http://167.172.120.46/api/view-home';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const backgroundImageUrl = `http://167.172.120.46/${data.encabezado.slider_cover[0].url}`;
        setBackgroundImageUrl(backgroundImageUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const backgroundStyle = {
    backgroundImage: windowWidth >= 670 ? `url(${backgroundImageUrl})` : '',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#F5F1ED',
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
