// BackButton.jsx

import React from 'react';

const BackButton = () => {
    const styles = {
        color: '#602131',
        fontSize: '14px',
        fontFamily: 'Avenir',
        fontWeight: 400,
        lineHeight: '16.80px',
        wordWrap: 'break-word',
        textDecoration: 'none',  // Para eliminar el subrayado de los enlaces
        padding: 0,             // Asegura que no haya padding
        textAlign: 'left',
        position: 'relative',
        left: '0px',
        marginRight: 'auto',

    };

    return (
        <a href="#" style={styles}>
            &lt;&lt; Regresar
        </a>
    );
}

export default BackButton;
