import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

export default function NavBarButton() {
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    // Llamada al endpoint para obtener la descripción
    fetch('http://167.172.120.46/api/view-homenotification')
    .then(response => response.json())
    .then(data => {
      setDescription(data?.home_notification?.description || "");
    })
    .catch(error => {
      console.error('Error fetching description:', error);
      // En caso de error, se mantiene la descripción vacía
    });
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveToHomeScreen = () => {
    // Verificar si la API de instalación está disponible
    if ('navigator' in window && 'standalone' in window.navigator) {
      if (window.navigator.standalone) {
        // La aplicación ya está instalada en la pantalla de inicio
        alert('La aplicación ya está instalada en la pantalla de inicio.');
      } else {
        // Se puede agregar un acceso directo a la pantalla de inicio
        alert('Por favor, toca el botón "Compartir" o "Agregar a la pantalla de inicio" para guardar.');
      }
    } else {
      // La API de instalación no está disponible
      alert('La API de instalación no está disponible en este navegador.');
    }
  };

  const styles = {
    container: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    appBar: {
      position: 'absolute',
      width: '100%',
      backgroundColor: 'transparent',
    },
    toolbar: {
      minHeight: '100px',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      paddingLeft: '30px',
      paddingRight: '30px',
      paddingTop: '14px',
      paddingBottom: '14px',
      background: '#602131',
      borderRadius: '35px',
      border: 'none',
      cursor: 'pointer',
    },
    buttonText: {
      textAlign: 'center',
      color: '#F7F3EF',
      fontSize: '13px',
      fontFamily: 'Athelas',
      fontWeight: 700,
      lineHeight: '15.60px',
      wordWrap: 'break-word',
    },
    modalBox: {
      position: 'absolute',
      width: '80%',
      maxWidth: '400px',
      backgroundColor: 'white',
      padding: '16px',
      outline: 'none',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      color: '#602131',
      textAlign: 'center',
      fontFamily: 'Athelas',
    },
    modalTitle: {
      color: '#602131',
      fontSize: '18px',
    },
    btn: {
      padding: '14px 30px',
      borderRadius: 50,
      border: '1px #602131 solid',
      color: '#602131',
      fontWeight: 'bold',
      textAlign: 'center',
      cursor: 'pointer',
      display: 'block',
      width: '80%',
      margin: '20px auto',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <Box sx={styles.container}>
      <AppBar position="absolute" elevation={0} sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <button onClick={handleOpen} style={styles.button}>
            <span style={styles.buttonText}>Comenzar</span>
          </button>
        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={styles.modalBox}>
            <Typography variant="h6" id="modal-title" style={styles.modalTitle}>
            </Typography>
            <Typography variant="subtitle1" id="modal-description">
              {description}
            </Typography>
            <div style={styles.btn} onClick={handleSaveToHomeScreen}>Guardar</div>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
