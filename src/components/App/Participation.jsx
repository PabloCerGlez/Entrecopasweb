import React, { useState, useEffect } from 'react';
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
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://167.172.120.46/api/view-home', {
            method: 'GET',
            headers: {
                'Cookie': 'XSRF-TOKEN=...; entre_copas_session=...'
                // Asegúrate de completar la cookie correctamente
            }
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error:', error));
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }

    const steps = data.como_participar.steps.map((step, index) => (
        <div key={index} style={styles.section}>
            <img width="78" height="60" src={`http://167.172.120.46/${step.icon_url}`} alt={`Section ${index + 1}`} />
            <div>
                <div style={{ ...styles.textStyles, ...styles.sectionTitle }}>{step.title}</div>
                <div style={{ ...styles.textStyles, ...styles.sectionDesc }}>{step.description}</div>
            </div>
        </div>
    ));

    return (
        <div id="section-below" style={styles.container}>
            <img width="26" height="26" src={iconHelpParticipation} alt="Placeholder" />
            <div style={styles.header}>{data.como_participar.title}</div>
            {steps}
            <button style={styles.startButton}>botón</button>
        </div>
    );
};

export default Participation;
