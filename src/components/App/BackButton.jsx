import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

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

    const handleBackClick = (e) => {
        e.preventDefault();
        navigate(-1);   // Navega hacia atrás
    };
    return (
        <a  style={styles} onClick={handleBackClick}>
            &lt;&lt; Regresar
        </a>
    );
}

export default BackButton;
