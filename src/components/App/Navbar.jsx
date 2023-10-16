import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import LogoBlk from "assets/images/LogoBlk.png";

export default function Navbar() {
  const [open, setOpen] = React.useState(false); // Estado para controlar el modal

  const handleOpen = (e) => {
    e.stopPropagation();  // Detiene la propagación del evento.
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', }}>
      <AppBar position="absolute" elevation={0} sx={{ width: '100%', backgroundColor: '#F7F3EF' }}>
        <Toolbar sx={{ minHeight: '100px', display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/">
            <img 
              src={LogoBlk} 
              alt="Logo"
              style={{ cursor: 'pointer' }}
            />
          </Link>
          <Button 
  onClick={(e) => handleOpen(e)}
  sx={{
              paddingLeft: '30px',
              paddingRight: '30px',
              paddingTop: '14px',
              paddingBottom: '14px',
              background: '#602131',
              borderRadius: '35px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Typography 
              sx={{
                textAlign: 'center',
                color: '#F7F3EF',
                fontSize: '13px',
                fontFamily: 'Athelas',
                fontWeight: 700,
                lineHeight: '15.60px',
                wordWrap: 'break-word'
              }}
            >
              Comenzar
            </Typography>
          </Button>
        </Toolbar>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box sx={{
            borderBottom: '1px solid #C1A1A7',
            width: '90%',
          }} />
        </div>
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
          <Box
            sx={{
              position: 'absolute',
              width: '80%',
              maxWidth: '400px',
              backgroundColor: 'white',
              padding: '16px',
              outline: 'none',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '8px'
            }}
          >
            <Typography variant="h6" id="modal-title">
              Modal
            </Typography>
            <Typography variant="subtitle1" id="modal-description">
            Descripción corta, facilisis felis ac, viverra elit. Curabitur suscipit sem at magna commodo.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
