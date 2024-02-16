import React, { useState, useEffect } from 'react';
import Navbar from 'components/App/Navbar';
import EvaluacionPrincipal from 'components/App/EvaluacionPrincipal';
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
    container: {
        width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
      },
      image: {
        width: '100%',
        height: 'auto',
        display: 'block',
      },
  };

  return (
    <div style={styles.container}>
      <EvaluacionPrincipal />
      <Footer />
    </div>
  );
}

export default LayoutTerm;
