import React from 'react';
const styles = {
    container: {
        maxWidth: "100%",
        margin: "0 auto",
        position: "relative",
        backgroundColor: "transparent",
        backgroundImage: "url('https://via.placeholder.com/443x168')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
    userInfo: {
        textAlign: "center",
        paddingTop: "15%",
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
        position: "relative"
    },
    avatarImg: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        display: "block",
        margin: "auto"
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
        alignItems: "center"
    },
    ctaText: {
        textAlign: "center",
        color: "#F7F3EF",
        fontSize: "4.8vw",
        fontFamily: "Athelas",
        fontWeight: "700"
    },
    circularBtn: {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "#602131",
        border: "none",
        color: "white",
        fontWeight: "bold",
        fontSize: "10px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};
export default function UserProfile() {
  

    return (
        <div style={styles.container}>
            <div style={styles.userInfo}>
                <div style={styles.userName}>Sammy</div>
                <div style={styles.userLevel}>Nivel: 1</div>
            </div>
            <div style={styles.userAvatar}>
                <img style={styles.avatarImg} src="https://via.placeholder.com/60x60" alt="Avatar" />
                <div style={styles.badge}>
                    <button style={styles.circularBtn}>x</button>
                </div>
                <div style={styles.badgeTop}>
                    <div style={styles.badgeBackground}></div>
                    <img style={styles.badgeIcon} src="https://via.placeholder.com/24x24" alt="Badge Superior" />
                </div>
            </div>
            <button style={styles.ctaButton}>
                <div style={styles.ctaText}>Ingresar código</div>
            </button>
        </div>
    );
}
