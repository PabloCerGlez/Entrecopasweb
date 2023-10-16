import React from 'react';

const NewPassword = () => {
    const styles = {
   
        body: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Avenir',
            height: '100vh', // Cambiado a '100vh' para abarcar toda la altura de la ventana

        },
        contentContainer: {
            
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Athelas',
            color: '#602131',
            marginTop: '50px', // Espaciado superior para separar del borde
            marginBottom: '40px' // Espaciado inferior para separar del formulario
        },
        title: {
            fontSize: '32px',
            width: '110%',
            fontStyle: 'italic',
            lineHeight: '38.40px',
            textAlign: 'center', // Cambiado a 'center' para centrar el texto
       
        },
        description: {
            marginTop:'50px',

            width: '100%',
            height: '36px',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '16.80px',
            fontFamily: 'Avenir',
            textAlign: 'center', // Cambiado a 'center' para centrar el texto
        },
        container: {
            width: '100%',
            marginBottom: '0px' // Cambiado a '0px' para eliminar el margen inferior

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
            marginTop:'50px',
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
            marginTop:'25px',

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
        <section style={styles.contentContainer}>
            <h1 style={styles.title}>Nueva contraseña</h1>
            <p style={styles.description}>
                Descripción corta, facilisis felis ac, viverra elit. Curabitur suscipit sem at magna commodo.
            </p>
        </section>
        <div style={styles.container}>
            <form>
            <input type="password" id="password" required placeholder="Contraseña*" style={styles.input} />
                <input type="password" id="password" required placeholder="Confirmar contraseña*" style={styles.input} />

                <input type="submit" value="Enviar Correo" style={styles.btn} />
            </form>
        </div>
    </div>

    );
}

export default NewPassword;
