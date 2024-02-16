import React, { useEffect, useState } from 'react';
import styles from 'styles/App.module.css';
import BackButton from 'components/App/BackButton';

const TermsAndConditions = () => {
    // Estado para guardar el título y contenido del endpoint
    const [termsData, setTermsData] = useState({ title: '', terms_conditions: '' });

    // Función para obtener los datos del endpoint
    const fetchTermsAndConditions = async () => {
        try {
            const response = await fetch('http://entrecopas.randominteractive.site/api/view-termsconditions');
            const data = await response.json();
            setTermsData(data.terms_conditions);
        } catch (error) {
            console.error("Error al obtener los términos y condiciones:", error);
        }
    };

    // Usamos useEffect para llamar a la función cuando el componente se monte
    useEffect(() => {
        fetchTermsAndConditions();
    }, []); // El arreglo vacío como segundo argumento asegura que se ejecute sólo una vez al montar el componente

    return (
        <main className={styles.containerTerm}>
            <BackButton />
            <header>
                <h1 className={styles.title}>{termsData.title || 'Términos y Condiciones'}</h1>
                <p className={styles.subtitle}>¿Tienes alguna duda? Aquí podrás encontrar información sobre nosotros</p>
            </header>

            <div className={styles.content}>
                <p>{termsData.terms_conditions || 'Lorem ipsum...'}</p>
            </div>
        </main>
    );
};

export default TermsAndConditions;
