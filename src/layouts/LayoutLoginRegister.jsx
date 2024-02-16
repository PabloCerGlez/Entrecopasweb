import React, { useState, useEffect } from 'react';

// Importando componentes para el diseño
import Navbar from 'components/App/Navbar';
import RegisterLogin from 'components/App/RegisterLogin';
import Footer from 'components/App/Footer';

// Importando imágenes utilizadas en el diseño
import headerBackGround from "assets/images/headerBackGround.png";
import headerBackGroundLarge from "assets/images/headerBackGroundLarge.png";
// Asegúrate de tener estas imágenes en la ruta especificada

/**
 * LayoutLoginRegister es un componente responsable de renderizar el diseño de las páginas de inicio de sesión y registro.
 */
function LayoutLoginRegister() {

  // Estado para almacenar el ancho de la ventana actual
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Efecto para escuchar eventos de cambio de tamaño de ventana y actualizar el estado del ancho de la ventana
  useEffect(() => {

    // Función para actualizar el estado del ancho de la ventana cuando cambia el tamaño de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    // Agregar un event listener a la ventana para eventos de cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Limpieza: eliminar el event listener de la ventana cuando se desmonta el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []); // La dependencia de la matriz vacía asegura que este efecto se ejecute una vez cuando se monta el componente y se limpie en el desmontaje

  // Estilos para varios elementos en el componente
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
      minHeight: '100vh', // Asegura que el contenedor ocupe al menos toda la altura de la ventana
      padding: '0 20px', // Agrega margen a los lados del contenedor
      boxSizing: 'border-box', // Asegura que el padding se incluya en el ancho total del contenedor
    },
  };

  return (
    <div style={styles.body}>
      <Navbar />
      <div style={styles.container}>
        <RegisterLogin />
      </div>
      <Footer />
    </div>
  );
}

export default LayoutLoginRegister;
