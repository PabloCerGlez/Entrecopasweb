import React, { useEffect, useState } from 'react';
import preguntasHeader from "assets/images/preguntasHeader.png";
import Intersect from "assets/images/Intersect.png";

const WineEvaluationComponent = () => {
    const [wineId, setWineId] = useState(null);
    const [tastingData, setTastingData] = useState(null);

    useEffect(() => {
        // Obtener el wine_code del cache (aquí se asume que está almacenado en algún lugar llamado cache)
        const wineCodeFromCache = localStorage.getItem('codigo_wine');

        // Verificar si se encontró el wine_code en el cache
        if (wineCodeFromCache) {
            const authToken = localStorage.getItem('authToken');

            // Realizar solicitud a la API utilizando el wine_code y el token
            fetch('http://entrecopas.randominteractive.site/api/view-tasting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({
                    code: wineCodeFromCache
                })
            })
            .then(response => response.json())
            .then(data => {
                // Guardar el wine_id en el localStorage
                localStorage.setItem('wine_id', data.wine_id);
                setWineId(data.wine_id);
                setTastingData(data.tasting);
            })
            .catch(error => console.error('Error:', error));
        }
    }, []);
    const redirectToVisualEvaluation = () => {
        window.location.href = '/evaluacion_visual'; // Redirigir a evaluacion_visual
    };

    const styles = {
        container: {
            backgroundColor: '#F7F3EF',
            color: '#602131',
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            textAlign: 'left',
            margin: 0,
        },
        imageContainer: {
            width: "100%",
            overflow: "hidden", // Para asegurar que la imagen no sobresalga del contenedor
        },
        image: {
            width: '100%',
            height: '300px',
            margin: 0, // Eliminar el margen para evitar espacios
        },
        title: {
            fontWeight: 'bold',
            fontSize: '24px',
            marginBottom: '20px',
        },
        content: {
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '20px',
        },
        listItem: {
            marginBottom: '10px',
            paddingLeft: '20px', // Espacio adicional para los puntos
            listStyleType: 'none', // Eliminar estilos predeterminados de la lista
        },
        bullet: {
            fontWeight: 'bold', // Puntos en negrita
            fontSize: '20px', // Tamaño de los puntos un poco más grande
            marginRight: '5px', // Margen derecho para separar los puntos del texto
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
            margin: '0 auto',
            marginTop: '20px',
            marginBottom: '20px',
        },
        whiteBtn: {
            padding: '14px 30px',
            color: '#602131',
            cursor: 'pointer',
            borderRadius: 50,
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)', // Agregar sombra
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            margin: '0 auto',
            marginTop: '20px',
            backgroundColor: '#FFFFFF',
            border: 'none',
            lineHeight: 1,
            fontSize: '14px', // Tamaño de letra más pequeño
        },
        logoSmall: {
            width: '30px',
            height: 'auto',
            marginRight: '10px',
        },
        additionalInfo: {
            flex: 1,
            textAlign: 'left',
        },
        additionalInfoTitle: {
            fontSize: '14px', // Tamaño de letra para el título más pequeño
            fontWeight: 'bold',
        },
        additionalInfoText: {
            fontSize: '11px', // Tamaño de letra para el texto más pequeño
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src={preguntasHeader} alt="Imagen completa" style={{ width: '100%', height: 'auto', display: 'block', margin: 0 }} />
            </div>
            <div style={styles.title}>{tastingData && tastingData.title}</div>
            <div style={styles.content}>
                {tastingData && tastingData.description}
            </div>
            <div style={styles.content}>
                <div style={styles.title}>{tastingData && tastingData.title_question}</div>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    {tastingData && tastingData.list_req_tasting.map((item, index) => (
                        <li key={index} style={styles.listItem}><span style={styles.bullet}>•</span>{item.requirement}</li>
                    ))}
                </ul>
            </div>
            <button style={styles.whiteBtn}>
                <img src={Intersect} alt="Logo pequeño" style={styles.logoSmall} />
                <div style={styles.additionalInfo}>
                    <div style={styles.additionalInfoTitle}>Crianza Caballero Hidalgo</div>
                    <div style={styles.additionalInfoText}>Descubre cómo se debe elegir una copa para cada tipo de vino.</div>
                </div>
            </button>
            <button style={styles.btn} onClick={redirectToVisualEvaluation}>Aceptar</button>
        </div>
    );
};

export default WineEvaluationComponent;
