import React from 'react';

const RegisterLogin = () => {
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
                    <div style={styles.btn}>Facebook</div>
                </div>
                <div style={styles.divider}>O Registrate aquí:</div>
                <form>
                    <input type="text" id="nombre" required placeholder="Nombre*" style={styles.input} />
                    <input type="text" id="apellidos" required placeholder="Apellidos*" style={styles.input} />
                    <input type="email" id="correo" required placeholder="Correo*" style={styles.input} />
                    <select id="estado" required style={styles.input}>
                        <option value="" disabled selected>Estado*</option>
                        <option>Aguascalientes</option>
                        {/* ... otros estados ... */}
                        <option>Zacatecas</option>
                    </select>
                    <input type="date" id="fecha-nacimiento" placeholder="Fecha de nacimiento" style={styles.input} />
                    <select id="genero" required style={styles.input}>
                        <option value="" disabled selected>Género*</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                    <input type="text" id="telefono" placeholder="Teléfono" style={styles.input} />
                    <input type="password" id="password" required placeholder="Contraseña*" style={styles.input} />
                    <input type="password" id="confirm-password" required placeholder="Confirmar contraseña*" style={styles.input} />

                    <div style={styles.checkboxGroup}>
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">Acepto todos los Términos y Condiciones*</label>
                    </div>
                    <div style={styles.checkboxGroup}>
                        <input type="checkbox" id="offers" />
                        <label htmlFor="offers">Quiero recibir ofertas e información</label>
                    </div>

                    <input type="submit" value="Registrarse" style={styles.btn} />
                </form>
                <div style={styles.loginLink}>
                    ¿Ya tienes cuenta? <a href="#" style={{ color: '#602131', textDecoration: 'underline' }}>Inicia sesión aquí</a>
                </div>
            </div>
        </div>
    );
}

export default RegisterLogin;
