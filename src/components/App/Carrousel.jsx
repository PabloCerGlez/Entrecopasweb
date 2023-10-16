import React from 'react';
import tempRectangle from "assets/images/tempRectangle.svg";

const Carrousel = () => {
    
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '577px',
        height: '330px',
        position: 'relative',
    },
    mainImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '240px',
        height: '253px',
        position: 'absolute',
        marginTop: '70px',
    },
    innerContainer: {
        width: '337px',
        height: '330px',
        position: 'relative',
    },
    roundedBox: {
        width: '258px',
        height: '271px',
        left: '40px',
        top: '59px',
        position: 'absolute',
        borderTopLeftRadius: '200px',
        borderTopRightRadius: '200px',
        border: '1px rgba(193, 161, 167, 0.25) solid',
    },
    title: {
        width: '228px',
        left: '55px',
        top: '0',
        position: 'absolute',
        textAlign: 'center',
        color: '#602131',
        fontSize: '32px',
        fontFamily: 'Athelas, serif',
        fontStyle: 'italic',
        fontWeight: 700,
        lineHeight: '38.40px',
        wordWrap: 'break-word',
    }
}

    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <div style={styles.roundedBox}></div>
                <div style={styles.title}>Recompensas</div>
            </div>
            <img style={styles.mainImage}  src={tempRectangle} alt="Recompensas" />
        </div>
    );
}

export default Carrousel;
