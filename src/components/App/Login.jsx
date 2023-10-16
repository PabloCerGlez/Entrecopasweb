import React from 'react';
const handleFacebookLogin = () => {
    window.FB.login((response) => {
        if (response.authResponse) {
            console.log('Welcome! Fetching your information...');
            window.FB.api('/me', function(response) {
                console.log('Successful login for: ' + response.name);
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
};

const Login = () => {
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
    };

    return (
        <div style={styles.body}>
            <div style={styles.tabContainer}>
                <a href="#" style={{ ...styles.tabLink, ...styles.activeTabLink }}>Registro</a>
                <a href="#" style={styles.tabLink}>Inicio de sesión</a>
            </div>

            <div style={styles.container}>
                <div style={styles.socialButtons}>
                    <div style={styles.btn}>Google</div>
                    <div style={styles.btn} onClick={handleFacebookLogin}>Facebook</div>
                </div>
                <div style={styles.divider}>O Inicia sesión aquí:</div>
                <form>

                    <input type="email" id="correo" required placeholder="Correo*" style={styles.input} />
                  
                    <input type="password" id="password" required placeholder="Contraseña*" style={styles.input} />
    

                   

                    <input type="submit" value="Iniciar sesión" style={styles.btn} />
                </form>
                <div style={styles.loginLink}>
                ¿Ya tienes cuenta? <a href="#" style={{ color: '#602131', textDecoration: 'underline' }}> Registrate aquí </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
