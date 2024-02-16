import React, { useEffect, useState } from 'react';
import preguntasHeader from "assets/images/preguntasHeader.png";

const EvaluacionDosComponent = () => {
    const [tastingData, setTastingData] = useState(null);

    useEffect(() => {
        const wineId = localStorage.getItem('wine_id');
        const authToken = localStorage.getItem('authToken');

        if (wineId && authToken) {
            fetch('http://entrecopas.randominteractive.site/api/view-tastingquestions1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({
                    wine_id: wineId
                })
            })
            .then(response => response.json())
            .then(data => {
                setTastingData(data.Comencemos);
            })
            .catch(error => console.error('Error:', error));
        }
    }, []);

    const styles = {
        container: {
            backgroundColor: '#F7F3EF',
            color: '#602131',
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            textAlign: 'left',
            margin: 0,
            boxSizing: 'border-box',
        },
        image: {
            width: '100%', // Abarcar todo el ancho
            height: 'auto',
            marginBottom: '20px',
            display: 'block',
        },
        title: {
            fontWeight: 'bold',
            fontSize: '24px',
            marginBottom: '20px',
        },
        pregunta: {
            fontWeight: 'bold', // Pregunta en negrita
            marginBottom: '20px', // Espacio entre pregunta y select
        },
        selectContainer: {
            width: '100%',
            position: 'relative', // Contenedor para posicionar el borde
        },
        select: {
            width: '100%',
            padding: '10px',
            border: 'none', // Sin borde
            borderBottom: '1px solid #602131', // Borde inferior
            backgroundColor: 'transparent', // Fondo transparente
            fontSize: '16px',
            color: '#602131',
            marginBottom: '20px',
            outline: 'none', // Sin contorno al seleccionar
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
        content:{
          marginBottom: '20px',
        }
    };

    return (
        <div style={styles.container}>
            <img src={preguntasHeader} alt="Imagen completa" style={styles.image} />
            <div style={styles.title}>Fase Gustativa </div>
            <div style={styles.content}>
                {tastingData && <div>{tastingData.title}</div>}
            </div>
            {tastingData && tastingData.tasting_questions1.map((pregunta, index) => (
                <div key={index}>
                    <div style={styles.pregunta}>{pregunta.pregunta}</div>
                    <div style={styles.selectContainer}>
                        <select style={styles.select}>
                            {pregunta.respuestas.map((respuesta, index) => (
                                <option key={index}>{respuesta.answer}</option>
                            ))}
                        </select>
                    </div>
                </div>
            ))}
            <button style={styles.btn}>Comenzar</button>
        </div>
    );
};

export default EvaluacionDosComponent;
