import React, { useState, useEffect } from 'react';
import fondoRecompesas from "assets/images/fondoRecompesas.svg";

let Carrousel = () => {
    let [rewardsData, setRewardsData] = useState([]);
    let [currentRewardIndex, setCurrentRewardIndex] = useState(0);

    useEffect(() => {
        fetch('http://entrecopas.randominteractive.site/api/view-home', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            const rewards = data.recompensas?.rewards || [];
            const modifiedRewards = rewards.map(reward => ({
                title: reward.title,
                image: reward.image.startsWith('http') ? reward.image : `http://entrecopas.randominteractive.site/${reward.image}`,
            }));
            setRewardsData(modifiedRewards);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '450px',
            position: 'relative',
            backgroundImage: `url(${fondoRecompesas})`,
            backgroundSize: '100% auto',
        },
        mainImage: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '240px',
            height: '233px',
            position: 'absolute',
            marginTop: '80px',
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
            top: '120', // Ajustar la posición del título más arriba
            position: 'absolute',
            textAlign: 'center',
            color: '#ffffffff',
            fontSize: '32px',
            fontFamily: 'Athelas, serif',
            fontStyle: 'italic',
            fontWeight: 700,
            lineHeight: '38.40px',
            wordWrap: 'break-word',
            marginBottom: '100',
            marginTop: '-30px',

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
            fontSize: '32px',
            marginLeft: '15px',
            color: '#ffffffff',
        },
        nextButton: {
            right: '0',
            fontSize: '32px',
            marginRight: '15px',
            color: '#ffffffff',
        },
    };

    const goToPreviousReward = () => {
        setCurrentRewardIndex(prevIndex => (prevIndex === 0 ? rewardsData.length - 1 : prevIndex - 1));
    };

    const goToNextReward = () => {
        setCurrentRewardIndex(prevIndex => (prevIndex === rewardsData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={styles.container}>
            <button onClick={goToPreviousReward} style={{ ...styles.button, ...styles.prevButton }}>←</button>
            <div style={styles.innerContainer}>
                <div style={styles.roundedBox}></div>
                <div style={styles.title}>{rewardsData.length > 0 && rewardsData[currentRewardIndex].title}</div>
            </div>
            <img
                style={styles.mainImage}
                src={rewardsData.length > 0 && rewardsData[currentRewardIndex].image}
                alt="Recompensas"
            />
            <button onClick={goToNextReward} style={{ ...styles.button, ...styles.nextButton }}>→</button>
        </div>
    );
};

export default Carrousel;
