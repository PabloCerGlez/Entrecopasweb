import React from 'react';
import Help from 'assets/images/headerCode.PNG';

// Estilos CSS en un objeto para el componente
const styles = {
  container: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',     // Abarca todo el ancho de la ventana del navegador
    height: '100vh',    // Abarca toda la altura de la ventana del navegador
    overflow: 'hidden', 
    objectFit: 'contain'  // Se asegura de que la imagen cubra todo el contenedor sin deformarse
    // Esconde cualquier contenido que exceda el tamaño del contenedor
  },
  image: {
    marginTop: '10px',

    width: '100%',      // Abarca todo el ancho del contenedor
    height: '100%',     // Abarca toda la altura del contenedor
  }
};

const CenteredImage = () => (
  <div style={styles.container}>
    <img src={Help} alt="Descripción de la imagen" style={styles.image} />
  </div>
);

export default CenteredImage;
