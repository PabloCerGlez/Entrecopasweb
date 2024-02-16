import React, { useState, useEffect } from 'react';
import Navbar from 'components/App/Navbar';
import Login from 'components/App/Login';
import Footer from 'components/App/Footer';

import headerBackGround from "assets/images/headerBackGround.png";
import headerBackGroundLarge from "assets/images/headerBackGroundLarge.png";

function LayoutLoginRegister() {
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
      backgroundColor: '#ffffff', // Ajuste el color de fondo a blanco
      color: '#C1A1A7',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "50px",
      padding: '0 20px', // Agrega margen a los lados del contenedor
      boxSizing: 'border-box', // Asegura que el padding se incluya en el ancho total del contenedor
    },
  };

  return (
    <div style={styles.body}>
      <Navbar />
      <div style={styles.container}>  
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default LayoutLoginRegister;
