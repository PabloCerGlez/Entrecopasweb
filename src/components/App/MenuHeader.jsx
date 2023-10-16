import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

import styles from 'styles/App.module.css';
import iconHelp from "assets/images/iconHelp.svg";
import iconRewards from "assets/images/iconRewards.svg";
import iconLogin from "assets/images/iconLogin.svg";

const MenuHeader = () => {
  return (
    <div className={styles.containerMenuHeader}>
        <div className={styles.menuItems}>
            <button className={styles.menuItem}>
                <img className="w-[26px] h-[26px]" src={iconHelp}  alt="Ayuda Icon" />
                <div className={styles.menuItemText}>Ayuda</div>
            </button>
            <button className={styles.menuItem}>
                <img className="w-[26px] h-[26px]" src={iconRewards} alt="Recompensas Icon" />
                <div className={styles.menuItemText}>Recompensas</div>
            </button>
            <button className={styles.menuItem}>

            <Link to="/login"> {/* Aquí está el cambio principal */}
      
       
                <img className="w-[26px] h-[26px]" src={iconLogin} alt="Iniciar sesión Icon" />
                <div className={styles.menuItemText}   style={{   textDecoration: 'none'  }} >Iniciar sesión</div>
                </Link>
            </button>
        </div>
    </div>
  );
};

export default MenuHeader;
