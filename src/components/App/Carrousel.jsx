import React, { useState } from 'react';
import tempRectangle from "assets/images/tempRectangle.svg";

const Carrousel = () => {
    const rewardsData = [
        {
            title: "Recompensa 1",
            image: "https://www.gstatic.com/webp/gallery3/1.sm.png"
        },
        {
            title: "Recompensa 2",
            image: "https://www.gstatic.com/webp/gallery3/2.sm.png"
        },
        {
            title: "Recompensa 3",
            image: "https://www.gstatic.com/webp/gallery3/3.sm.png"
        }
    ];

    const [currentRewardIndex, setCurrentRewardIndex] = useState(0);

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
        },
        button: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: 999,
        },
        prevButton: {
            left: '0',
        },
        nextButton: {
            right: '0',
        }
    };

    const goToPreviousReward = () => {
        setCurrentRewardIndex((prevIndex) => (prevIndex === 0 ? rewardsData.length - 1 : prevIndex - 1));
    };

    const goToNextReward = () => {
        setCurrentRewardIndex((prevIndex) => (prevIndex === rewardsData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={styles.container}>
            <button onClick={goToPreviousReward} style={{ ...styles.button, ...styles.prevButton }}>Anterior</button>
            <div style={styles.innerContainer}>
                <div style={styles.roundedBox}></div>
                <div style={styles.title}>{rewardsData[currentRewardIndex].title}</div>
            </div>
            <img style={styles.mainImage} src={rewardsData[currentRewardIndex].image} alt="Recompensas" />
            <button onClick={goToNextReward} style={{ ...styles.button, ...styles.nextButton }}>Siguiente</button>
        </div>
    );
};

export default Carrousel;
