import React, { useState, useEffect } from 'react';
import KnowWines from 'components/App/KnowWines';
import SliderPromotion from 'components/App/SliderPromotion';

import ProfileBackgroundHeader from "assets/images/ProfileBackgroundHeader.svg";

const styles = {
    container: {
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        backgroundColor: "transparent",
        backgroundImage: `url(${ProfileBackgroundHeader})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
    userInfo: {
        textAlign: "center",
        position: "relative"
    },
    userName: {
        color: "#602131",
        fontFamily: "Athelas",
        fontWeight: "700",
        fontSize: "5.6vw"
    },
    userLevel: {
        color: "#602131",
        fontFamily: "Inter",
        fontWeight: "400",
        fontSize: "3.7vw"
    },
    userAvatar: {
        width: "17vw",
        height: "17vw",
        margin: "2vw auto",
        position: "relative",
        paddingTop: "70px",
    },
    avatarImg: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        display: "block",
        margin: "auto",
    },
    badge: {
        width: "7.5vw",
        height: "7.5vw",
        position: "absolute",
        bottom: "-2vw",
        right: "-2vw"
    },
    badgeTop: {
        width: "7.5vw",
        height: "7.5vw",
        position: "absolute",
        top: "-2vw",
        right: "-2vw"
    },
    badgeBackground: {
        width: "100%",
        height: "100%",
        background: "white",
        borderRadius: "50%",
        position: "absolute"
    },
    badgeIcon: {
        width: "80%",
        height: "80%",
        borderRadius: "50%",
        border: "0.50px solid #602131",
        position: "absolute",
        top: "10%",
        left: "10%"
    },
    ctaButton: {
        width: "75%",
        height: "12vw",
        margin: "2vw auto",
        background: "#602131",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ctaText: {
        textAlign: "center",
        color: "#F7F3EF",
        fontSize: "4.8vw",
        fontFamily: "Athelas",
        fontWeight: "700"
    },
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: 1,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    modalContent: {
        backgroundColor: "#fefefe",
        padding: "20px",
        border: "1px solid #888",
        width: "80%",
        borderRadius: "10px",
        maxWidth: "500px" // Ajusta el ancho máximo según sea necesario
    },
    close: {
        color: "#aaa",
        float: "right",
        fontSize: "28px",
        fontWeight: "bold",
        cursor: "pointer"
    }
};

export default function UserProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "",
        level: 0,
        avatar: "https://via.placeholder.com/60x60",
        badgeIcon: "https://via.placeholder.com/24x24"
    });
    const [showModal, setShowModal] = useState(false);
    const [codigoWine, setCodigoWine] = useState("");

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        const userPassword = localStorage.getItem('userPassword');
        if (!userEmail || !userPassword) {
            console.error("No se encontraron las credenciales de usuario en el localStorage.");
            return;
        }

        fetch('http://entrecopas.randominteractive.site/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
                terms: "1",
                offers: "1"
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al iniciar sesión.');
            }
            return response.json();
        })
        .then(loginData => {
            setUserProfile({
                name: loginData.user.name,
                level: loginData.user.level,
                avatar: loginData.user.photo ? loginData.user.photo : "https://via.placeholder.com/60x60",
                badgeIcon: loginData.user.badgeIcon ? loginData.user.badgeIcon : "https://via.placeholder.com/24x24"
            });
            console.log("Nombre del usuario:", loginData.user.name);
        })
        .catch(error => console.error('Error al iniciar sesión:', error));
    }, []);


    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCodigoWineChange = (event) => {
        setCodigoWine(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Código wine ingresado:", codigoWine);
        localStorage.setItem('codigo_wine', codigoWine); // Guardar el código wine en el localStorage
        handleCloseModal();
        window.location.replace('/evaluacion-principal'); // Redirigir a evaluacion_pricinpal

    };

    return (
        <div>
            <div style={styles.container}>
                <div style={styles.userAvatar}>
                    <img style={styles.avatarImg} src={userProfile.avatar} alt="Avatar" />
                    <div style={styles.badge}>
                        <button style={styles.circularBtn}>+</button>
                    </div>
                    <div style={styles.badgeTop}>
                        <div style={styles.badgeBackground}></div>
                        <img style={styles.badgeIcon} src={userProfile.badgeIcon} alt="Badge Superior" />
                    </div>
                </div>
                <div style={styles.userInfo}>
                    <div style={styles.userName}>{userProfile.name}</div>
                    <div style={styles.userLevel}>Nivel: {userProfile.level}</div>
                </div>
                <button style={styles.ctaButton} onClick={handleOpenModal}>
                    <div style={styles.ctaText}>Ingresar código</div>
                </button>
            </div>

            {showModal && (
    <div style={styles.modal}>
        <div style={styles.modalContent}>
            <span style={{ textAlign: "center", fontSize: "33px", display: "block", marginBottom: "20px" }}>Ingresar código</span>
            <form onSubmit={handleSubmit}>
                <input
                    style={{
                        width: '100%',
                        padding: '10px 0',
                        marginBottom: 15,
                        border: 'none',
                        borderBottom: '1px solid #C1A1A7',
                        fontSize: 14,
                        color: '#C1A1A7',
                        background: 'transparent',
                        outline: 'none',
                        transition: 'all 0.3s',
                        appearance: 'none',
                    }}
                    type="text"
                    id="codigo_wine"
                    name="codigo_wine"
                    value={codigoWine}
                    onChange={handleCodigoWineChange}
                    placeholder="Código Vino"
                />
                <button
                    style={{
                        padding: '14px 30px',
                        borderRadius: 50,
                        border: '1px solid #602131',
                        color: '#602131',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        cursor: 'pointer',
                        display: 'block',
                        width: '80%',
                        margin: '20px auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#ffffff',
                    }}
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </div>
    </div>
)}


            <SliderPromotion/>
            <KnowWines/>
        </div>
    );
}
