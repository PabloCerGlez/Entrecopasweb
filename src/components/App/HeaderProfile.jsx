import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoBlk from "assets/images/LogoBlk.png";

export default function HeaderProfile() {
  const [open, setOpen] = React.useState(false); // Estado para controlar el modal

  const handleOpen = (e) => {
    e.stopPropagation();  // Detiene la propagación del evento.
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false);
  };
  const styles = {
    tabContainer: {
        width: '100%',
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    tabLink: {
        flex: 1,
        textAlign: 'center',
        color: '#602131',
        fontSize: 21,
        fontFamily: 'Athelas',
        fontStyle: 'italic',
        fontWeight: 700,
        textDecoration: 'none',
        padding: '10px 0',
        borderBottom: '3px solid #602131',
    },
    activeTabLink: {
        color: '#C1A1A7',
        borderBottom: '1px solid #C1A1A7',
    },
    container: {
        width: '100%',
        margin: 'auto',
    },
    socialButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 20,
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
    modalTitle:{
      color: '#602131',
      fontsize: '18px',
    }
  };
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <AppBar position="absolute" elevation={0} sx={{ width: '100%', backgroundColor: '#F7F3EF' }}>
        <Toolbar sx={{ minHeight: '100px', display: 'flex', justifyContent: 'center' }}>
          <Link to="/">
            <img 
              src={LogoBlk} 
              alt="Logo"
              style={{ cursor: 'pointer' }}
            />
          </Link>
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
    </Box>
  );
}