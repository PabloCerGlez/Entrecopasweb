import React from 'react';
import logoHeader from "assets/images/logoHeader.svg";
import arrowBottom from "assets/images/arrowBottom.svg";

const HeaderText = () => {
    const styles = {
        mainContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Asegura que el contenedor ocupe toda la altura de la ventana.
        },
        containerHeaderText: {
            width: '100%',
            position: 'relative',
            textAlign: 'center',  // Centramos el texto de los elementos internos.
        },
        mainImage: {
            width: 217,
            height: 148,
            margin: '0 auto',  // Centramos la imagen.
        },
        welcomeMessage: {
            width: 287,
            color: '#F5F1ED',
            fontSize: 32,
            fontFamily: 'Athelas, serif',
            fontStyle: 'italic',
            fontWeight: 700,
            wordWrap: 'break-word',
            margin: '25px auto',
        },
        description: {
            width: 277,
            height: 65,
            color: '#F5F1ED',
            fontSize: 18,
            fontFamily: 'Avenir, sans-serif',
            fontWeight: 400,
            lineHeight: '21px',
            wordWrap: 'break-word',
            margin: '25px auto',

        },
        arrow: {
            justifyContent: 'center',
            alignItems: 'center',

            marginBottom: '50px',

            display: 'relative',
            bottom: 0,  
        },
    };
    
    return (
        <div style={styles.mainContainer}>
            <div style={styles.containerHeaderText}>
                <img style={styles.mainImage} src={logoHeader} alt="Imagen representativa" />
                <div style={styles.welcomeMessage}>Mensaje de bienvenida al portal</div>
                <div style={styles.description}>Descripción corta, facilisis felis ac, viverra elit. Curabitur suscipit sem at magna commodo.</div>
                <div style={styles.arrow}><img src={arrowBottom}  style={{ width: '30px' }} alt="Arrow Icon" /></div>

            </div>
        </div>
    );
};

export default HeaderText;
