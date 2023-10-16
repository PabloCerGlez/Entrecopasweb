import React from 'react';
import SvgIconBackGround from 'assets/images/FooterBackGround.svg';
import LogoFooter from 'assets/images/LogoFooter.svg';

const CombinedFooter = () => {
    const styles = {
        container: {
            width: '100%',
            height: '300px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundImage: `url(${SvgIconBackGround})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top'
            
        },
        footerContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
            paddingLeft: '20px',
            paddingTop: '20px',
            zIndex: 1
        },
        linkText: {
            color: '#fff',
            fontSize: '18px',
            fontFamily: 'Avenir',
            fontWeight: '800',
            wordWrap: 'break-word',
            textDecoration: 'none',
            textAlign: 'left'
        },
        copyrightText: {
            color: '#fff',
            fontSize: '14px',
            fontFamily: 'Avenir',
            fontWeight: '400',
            textAlign: 'center',
            marginTop: '20px'
        },
        divider: {
            width: '80%',
            height: '1px',
            margin:'15px',
            alignSelf: 'center',
      
        },
        logo: {
            width: '99px',
            height: '68px'
        }
    };

    return (
        <>
            <style>
                {`
                    @media (max-width: 820px) {
                        .tablet-footer {
                            position: absolute;
                            bottom: 0;
                        }
                    }
                `}
            </style>
            <div style={styles.container} className="tablet-footer">
                <div style={styles.footerContent}>
                    <img style={styles.logo}src={LogoFooter}  alt="Logo Placeholder" />
                    <a href="#" style={styles.linkText}>Iniciar sesión</a>
                    <a href="#" style={styles.linkText}>Centro de ayuda</a>
                    <a href="#" style={styles.linkText}>Términos y Condiciones</a>
                </div>
                <div style={styles.divider}> <hr></hr></div>
                <div style={styles.copyrightText}>
                    Copyright © 2023 LOREM IPSUM DOLOR SIT AMET
                </div>
            </div>
        </>
    );
};

export default CombinedFooter;
