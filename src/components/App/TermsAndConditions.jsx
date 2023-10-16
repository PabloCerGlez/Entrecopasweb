import React from 'react';
import styles from 'styles/App.module.css';
import BackButton from 'components/App/BackButton'
const TermsAndConditions = () => {
    return (
        <main className={styles.containerTerm}>
         <BackButton/>   
            <header>
                <h1 className={styles.title}>Términos y Condiciones</h1>
                <p className={styles.subtitle}>¿Tienes alguna duda? Aquí podrás encontrar información sobre nosotros</p>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat arcu sollicitudin velit maximus, 
                condimentum dictum nunc auctor. Mauris volutpat felis ac nulla sodales fermentum...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat arcu sollicitudin velit maximus, 
                condimentum dictum nunc auctor. Mauris volutpat felis ac nulla sodales fermentum...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat arcu sollicitudin velit maximus, 
                condimentum dictum nunc auctor. Mauris volutpat felis ac nulla sodales fermentum...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat arcu sollicitudin velit maximus, 
                condimentum dictum nunc auctor. Mauris volutpat felis ac nulla sodales fermentum...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat arcu sollicitudin velit maximus, 
                condimentum dictum nunc auctor. Mauris volutpat felis ac nulla sodales fermentum...</p>
            </div>
        </main>
    );
};

export default TermsAndConditions;
