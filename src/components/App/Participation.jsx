import React from 'react';
import iconEnterAccount from "assets/images/iconEnterAccount.svg";
import iconStartExperience from "assets/images/iconStartExperience.svg";
import iconCreateAccount from "assets/images/iconCreateAccount.svg";
import iconHelpParticipation from "assets/images/iconHelpParticipation.svg";

const styles = {
    body: {
        height: '100%',
        margin: 0,
        padding: 0,
        background: '#F7F3EF',/* Sets the background color of the app to a light beige */

    },
    container: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        margin: '45px auto',

        gap: '16px'
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
    },
    textStyles: {
        color: '#602131',
        fontFamily: 'Athelas',
        wordWrap: 'break-word'
    },
    sectionTitle: {
        width: '241px',
        fontSize: '21px',
        fontWeight: 700,
        lineHeight: '25.20px'
    },
    sectionDesc: {
        width: '245px',
        fontSize: '14px',
        fontFamily: 'Avenir',
        fontWeight: 400,
        lineHeight: '16.80px'
    },
    startButton: {
        width: '283px',
        height: '50px',
        padding: '14px 30px',
        border: '1px #602131 solid',
        borderRadius: '50px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        fontSize: '18px',
        lineHeight: '21.60px',
        fontWeight: 700,
        color: '#602131',

    },
    divider: {
        width: '337px',
        height: '0px',
        border: '1px #C1A1A7 solid',
        margin: '20px 0'
    },
    header: {
        width: '228px',
        fontSize: '32px',
        fontStyle: 'italic',
        fontWeight: 700,
        lineHeight: '38.40px',
        color: '#602131',
        alignItems: 'left',
        justifyContent: 'left',
        marginLeft: '-60px' 
    }
};

const Participation = () => {
    return (
        <div style={styles.container}>
            <img width="26" height="26" src={iconHelpParticipation} alt="Placeholder" />
            <div style={styles.header}>¿Cómo participar?</div>
            <div style={styles.section}>
                <img width="78" height="60" src={iconCreateAccount} alt="Section 1" />
                <div>
                    <div style={{ ...styles.textStyles, ...styles.sectionTitle }}>Crea tu cuenta</div>
                    <div style={{ ...styles.textStyles, ...styles.sectionDesc }}>Descripción corta, facilisis felis ac, viverra elit. Curabitur suscipit sem at magna commodo.</div>
                </div>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.section}>
                <img width="78" height="76" src={iconEnterAccount} alt="Section 2" />
                <div>
                    <div style={{ ...styles.textStyles, ...styles.sectionTitle }}>Ingresa el código</div>
                    <div style={{ ...styles.textStyles, ...styles.sectionDesc }}>Descripción corta, facilisis felis ac, viverra elit. Curabitur suscipit sem at magna commodo.</div>
                </div>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.section}>
                <img width="78" height="70" src={iconStartExperience} alt="Section 3" />
                <div>
                    <div style={{ ...styles.textStyles, ...styles.sectionTitle }}>Comienza tu experiencia</div>
                    <div style={{ ...styles.textStyles, ...styles.sectionDesc }}>Descripción corta, facilisis felis ac, viverra elit. Curabitur suscipit sem at magna commodo.</div>
                </div>
            </div>
            <button style={styles.startButton}>Comenzar</button>
        </div>
    );
};

export default Participation;
