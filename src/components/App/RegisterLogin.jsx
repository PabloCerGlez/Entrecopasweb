

import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import 'styles/Register.module.css';


const RegisterLogin = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
const [snackbarSeverity, setSnackbarSeverity] = useState('success');
const [showTooltip, setShowTooltip] = useState(false);

    // Estilos
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
            color: '#C1A1A7',
            fontSize: 21,
            fontFamily: 'Athelas',
            fontStyle: 'italic',
            fontWeight: 700,
            textDecoration: 'none',
            padding: '10px 0',
            borderBottom: '1px solid #C1A1A7',
        },
        activeTabLink: {
            color: '#602131',
            borderBottom: '3px solid #602131',
        },
        container: {
            width: '100%',
            margin: 'auto',
        },
        socialButtons: {
            height: '80%',
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
        divider: {
            textAlign: 'left',
            marginBottom: 20,
            color: '#602131',
            fontSize: 14,
        },
        input: {
            width: '100%',
            padding: '10px 0',
            marginBottom: 15,
            border: 'none',
            borderBottom: '1px solid #C1A1A7',
            fontSize: 14,
            color: '#C1A1A7',
            background: 'transparent',
            outline: 'none',
            transition: 'all 0.3s',
            appearance: 'none',
        },
        checkboxGroup: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 10,
            color: '#602131',
        },
        loginLink: {
            textAlign: 'center',
            marginTop: 20,
            color: '#602131',
        },
        checkboxGroup: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 10,
            color: '#602131',
            position: 'relative', // Added
        },
        
        customCheckbox: {
            display: 'block',
            width: '20px',
            height: '20px',
            border: '1px solid #602131',
            borderRadius: '4px',
            marginRight: '10px',
            position: 'relative',
            cursor: 'pointer',
            appearance: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
        },
      
        
        btnHover: {
            backgroundColor: '#502021',
            color: 'white',
        },
        tooltipIcon: {
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer',
            marginLeft: '-25px', // Ajusta según sea necesario
            color: '#C1A1A7',
            userSelect: 'none',
            fontSize: '12px'
        },
        tooltipText: {
            visibility: 'hidden',
            width: '160px',
            backgroundColor: '#602131',
            color: '#fff',
            textAlign: 'center',
            borderRadius: '6px',
            padding: '5px 0',
            position: 'absolute',
            zIndex: 1,
            left: '-170%', // Ajusta según sea necesario
            bottom: '125%', // Ajusta según sea necesario
            opacity: 0,
            transition: 'opacity 0.3s'
        },
        tooltipTextVisible: {
            visibility: 'visible',
            opacity: 1
        }
        
    };


    // Estados para las entradas
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
        offers: false
    });

    const [message, setMessage] = useState(null);
    const [passwordsMatch, setPasswordsMatch] = useState(true);  // Nuevo estado
    const [btnHover, setBtnHover] = useState(false);
    const [isOfAge, setIsOfAge] = useState(true);

    const handleMouseEnter = () => {
        setBtnHover(true);
    }
    
    const handleMouseLeave = () => {
        setBtnHover(false);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isOfAge) {
            setSnackbarMessage('Debes ser mayor de 18 años para registrarte.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }
    
        if (formData.password !== formData.password_confirmation) {
            setMessage("Las contraseñas no coinciden");
            setPasswordsMatch(false);  // Las contraseñas no coinciden

            return;
        }else{
                        setPasswordsMatch(true);   // Las contraseñas coinciden

        }

        try {
            const response = await fetch('http://167.172.120.46/api/registerAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('Respuesta del servidor:', data);

            if (response.ok) {
                setMessage('Registrado exitosamente!');
                console.log('Ok:', response.ok);
                setSnackbarMessage('Registrado exitosamente!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);

            } else {
                setMessage(data.message || 'Error al registrar.');
                                console.log('Err:', data.message);
                                            setSnackbarMessage("El correo electrónico ya ha sido registrado.");
                                            setSnackbarSeverity('error');
                                            setOpenSnackbar(true);

            }
        } catch (error) {
            setMessage('Error de red o servidor.');
            console.error('Error:', error);

        }
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };
    const validateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear() - (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) ? 1 : 0);
    return age >= 18;
};

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const newFormData = {
            ...formData,
            [e.target.id]: value
        };
        setFormData(newFormData);
        if (e.target.id === 'fecha-nacimiento') {
            setIsOfAge(validateAge(e.target.value));
        }
        
        // Validar si las contraseñas coinciden cada vez que el usuario modifica las entradas
        if (e.target.id === 'password' || e.target.id === 'password_confirmation') {
            if (newFormData.password !== newFormData.password_confirmation) {
                setPasswordsMatch(false);  // Las contraseñas no coinciden
            } else {
                setPasswordsMatch(true);   // Las contraseñas coinciden
            }
        }
    };
    

    return (
        <div style={styles.body}>
            <div style={styles.tabContainer}>
                <a href="/registro" style={{ ...styles.tabLink, ...styles.activeTabLink }}>Registro</a>
                <a href="/login" style={styles.tabLink}>Inicio de sesión</a>
            </div>

            <div style={styles.container}>
      
                <div style={styles.socialButtons}>
                    <div style={styles.btn}>Google</div>
                    <div style={styles.btn}>Facebook</div>
                </div>
                <div style={styles.divider}>O Registrate aquí:</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} required placeholder="Nombre*" style={styles.input} />
                    <input type="text" id="apellidos" required placeholder="Apellidos*" style={styles.input} />
                    <input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="Correo*" style={styles.input} />
                    <select id="estado" required style={styles.input}>
                        <option value="" disabled selected>Estado*</option>
                        <option>Aguascalientes</option>
                        {/* ... otros estados ... */}
                        <option>Zacatecas</option>
                    </select>
                    <input type="date" id="fecha-nacimiento" placeholder="Fecha de nacimiento" style={styles.input} onChange={handleChange} />
{ !isOfAge && <span style={{color: 'red', fontSize: 12}}>Debes ser mayor de 18 años para registrarte.</span> }
                    <select id="genero" required style={styles.input}>
                        <option value="" disabled selected>Género*</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                    <input type="text" id="telefono" placeholder="Teléfono" style={styles.input}  />
           
                    <span className="tooltip-icon"
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
>
    i
    {showTooltip && 
        <div style={styles.tooltipText}>El límite de caracteres es 8</div>
    }
</span>
                <input 
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Contraseña*"
                    style={styles.input} 
                />
                <input 
                    type="password"
                    id="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    required
                    placeholder="Confirmar contraseña*"
                    style={passwordsMatch ? styles.input : {...styles.input, borderColor: 'red'}} 
                />
                { !passwordsMatch && <span style={{color: 'red', fontSize: 12}}>Las contraseñas no coinciden</span> }
                <div style={styles.checkboxGroup}>
    <input type="checkbox" id="terms" checked={formData.terms} onChange={handleChange} required style={{display: 'none'}}/>
    <label htmlFor="terms" style={styles.customCheckbox}>
        {formData.terms && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#602131" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )}
    </label>
    Acepto todos los Términos y Condiciones*
</div>
<div style={styles.checkboxGroup}>
    <input type="checkbox" id="offers" checked={formData.offers} onChange={handleChange} style={{display: 'none'}}/>
    <label htmlFor="offers" style={styles.customCheckbox}>
        {formData.offers && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#602131" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )}
    </label>
    Quiero recibir ofertas e información
</div>

<input 
    type="submit" 
    value="Registrarse" 
    style={btnHover ? {...styles.btn, ...styles.btnHover, color: 'white'} : styles.btn} 
    className="register-btn" 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
/>

                </form>
                <div style={styles.loginLink}>
                    ¿Ya tienes cuenta? <a href="/login" style={{ color: '#602131', textDecoration: 'underline' }}>Inicia sesión aquí</a>
                </div>
            </div>
            
            <Snackbar 
            open={openSnackbar} 
            autoHideDuration={6000} 
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} variant="filled">
                {snackbarMessage}
            </Alert>
        </Snackbar>
        </div>

        
    );
}

export default RegisterLogin;
