import React, { useState,useEffect  } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { FacebookProvider, LoginButton } from 'react-facebook';
import showIcon from "assets/images/show_icon.svg";
import hideIcon from "assets/images/hide_icon.svg";
const handleGoogleLogin = (response) => {
    if (response.tokenId) {
        // Aquí envías el token ID a tu servidor para que lo verifique y establezca la sesión del usuario
        console.log(response.profileObj);  // Aquí puedes ver la información del usuario
    } else {
        // Manejar el error
        console.log('Google Login failed', response);
    }
};



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña

const [snackbarSeverity, setSnackbarSeverity] = useState('success');
useEffect(() => {
    // Verificar si FB ya está definido (por ejemplo, si se agregó el script en index.html)
    if (window.FB) {
      return; // Si FB ya está definido, no necesitamos hacer nada más.
    }

    // Cargar e inicializar el SDK de Facebook
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      js.onload = function() {
        window.FB.init({
          appId: '1769861370142296',
          cookie: true,
          xfbml: true,
          version: 'v11.0' 
        });
      };
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Si usas algún efecto secundario que dependa del SDK de Facebook,
    // deberías volver a ejecutar ese efecto cuando FB esté disponible.
    // Por ejemplo, puedes hacer: setSdkLoaded(true) y usar sdkLoaded como dependencia en otros useEffects.
  }, []);
  
const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
    const navigate = useNavigate();
   
    function handleSuccess(response) {
        console.log(response.status);
      }
    
      function handleError(error) {
        console.log(error);
      }
    
    const handleTempLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://entrecopas.randominteractive.site/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    terms: "1",
                    offers: "1"
                }),
            });
    
            const data = await response.json();
     console.log(data);
            if (data && data.token) { // Si la respuesta contiene un token, entonces el inicio de sesión fue exitoso
                console.log('Inicio de sesión exitoso');
                
                // Almacenar el token en localStorage
                localStorage.setItem('authToken', data.token);
                                // Almacenar el correo en localStorage
                                localStorage.setItem('userEmail', email);
                                localStorage.setItem('userPassword', password);
                // Si necesitas almacenar datos del usuario, puedes hacerlo también
                // localStorage.setItem('userData', JSON.stringify(data.user));
    
                setSnackbarMessage('¡Inicio de sesión exitoso!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else if (data && data.message && data.message.includes("Email No Verificado")) {
                console.log('Correo no confirmado');
                setSnackbarMessage('Por favor, confirma tu correo electrónico antes de continuar.');
                setSnackbarSeverity('warning');
                setOpenSnackbar(true);
            } else {
                console.log('Correo o contraseña incorrectos');
                setSnackbarMessage('Correo o contraseña incorrectos');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
            setSnackbarMessage('Error durante el inicio de sesión');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };
    
    

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const styles = {
        body:{
            backgroundColor: '#ffffffff',

        },
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
                btnGoogle: {
            padding: '14px 30px',
            borderRadius: 50,
            border: '1px #602131 solid',
            color: '#602131',
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer',
            display: 'block',
            width: '90px',
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
        loginLinkPassword: {
            textAlign: 'right',
            marginTop: 0,
            color: '#602131',
                        fontSize: 10,

        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.tabContainer}>
                <a href="/registro" style={{ ...styles.tabLink, ...styles.activeTabLink }}>Registro</a>
                <a href="/login" style={styles.tabLink}>Inicio de sesión</a>
            </div>

            <div style={styles.container}>
                <div style={styles.socialButtons}>
                    <div onClick={handleGoogleLogin}>
                    <divs onClick={() => login()} style={styles.btnGoogle} >
     Google 
    </divs>
                    </div>

   

                    <div >    


                    <FacebookProvider appId="1769861370142296">
      <LoginButton 
        scope="email"
        onError={handleError}
        onSuccess={handleSuccess}
        style={{
          padding: '14px 30px',
          borderRadius: '50px',
          border: '1px #602131 solid',
          color: '#602131',
          fontWeight: 'bold',
          textAlign: 'center',
          cursor: 'pointer',
          display: 'block',
          width: '150px',
          height: '49px',
          fontWeight: 'bold',

          margin: '20px auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Facebook
      </LoginButton>
    </FacebookProvider>
    
    
    </div>
                </div>
                <div style={styles.divider}>O Inicia sesión aquí:</div>
                <form onSubmit={handleTempLogin}>
                    <input type="email" id="correo" required placeholder="Correo*" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div style={{ position: 'relative' }}>
                    <input type={showPassword ? "text" : "password"} id="password" required placeholder="Contraseña*" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <img src={showPassword ? showIcon : hideIcon} alt="Toggle Password Visibility" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={togglePasswordVisibility} />
                </div>                    <div style={styles.loginLinkPassword}>
                   <a href="/registro" style={{      textAlign: 'right',color: '#602131', textDecoration: 'underline' }}>  ¿Ha olvidado la contraseña? </a>
                </div>
                    <input type="submit" value="Iniciar sesión" style={styles.btn} />
                </form>
                <div style={styles.loginLink}>
                    ¿No tienes cuenta? <a href="/registro" style={{ color: '#602131', textDecoration: 'underline' }}> Registrate aquí </a>
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

export default Login;