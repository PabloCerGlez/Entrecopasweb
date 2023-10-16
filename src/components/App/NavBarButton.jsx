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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', }}>
      <AppBar position="absolute" elevation={0} sx={{ width: '100%', backgroundColor: 'transparent' }}>
        <Toolbar sx={{ minHeight: '100px', display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            onClick={handleOpen}
            style={{
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
            <span style={{
              textAlign: 'center',
              color: '#F7F3EF',
              fontSize: '13px',
              fontFamily: 'Athelas',
              fontWeight: 700,
              lineHeight: '15.60px',
              wordWrap: 'break-word'
            }}>
              Comenzar
            </span>
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
              Modal base
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
