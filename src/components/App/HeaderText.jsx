import React, { useState, useEffect } from 'react';
import logoHeader from "assets/images/logoHeader.svg";
import arrowBottom from "assets/images/arrowBottom.svg";

const HeaderText = () => {
    const [headerData, setHeaderData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://entrecopas.randominteractive.site/api/view-home', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                setHeaderData(data?.encabezado);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

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
                {headerData && (
                    <>
                        <div style={styles.welcomeMessage}>{headerData.title}</div>
                        <div style={styles.description}>{headerData.description}</div>
                    </>
                )}
                <a href="#section-below" style={styles.arrow}><img src={arrowBottom} style={{ width: '30px' }} alt="Arrow Icon" /></a>
            </div>
        </div>
    );
};

export default HeaderText;
