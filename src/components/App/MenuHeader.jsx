import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Importa useNavigate además del componente Link

import styles from 'styles/App.module.css';
import iconHelp from "assets/images/iconHelp.svg";
import iconRewards from "assets/images/iconRewards.svg";
import iconLogin from "assets/images/iconLogin.svg";

const MenuHeader = () => {
  const navigate = useNavigate();  // Hook para navegar programáticamente
  const isLoggedIn = !!localStorage.getItem('authToken');  // Determina si el usuario está logeado

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('authToken');  // Elimina el token
    navigate('/login');  // Navega hacia la página de login
  };

  return (
    <div className={styles.containerMenuHeader}>
        <div className={styles.menuItems}>
            
            <button className={styles.menuItem}>
                <Link to="/centro-ayuda">
                    <img className="w-[26px] h-[26px]" src={iconHelp} alt="Ayuda Icon" />
                    <div className={styles.menuItemText}>Ayuda</div>
                </Link>
            </button>

            <button className={styles.menuItem}>
                <Link to="/recompesas">
                    <img className="w-[26px] h-[26px]" src={iconRewards} alt="Recompensas Icon" />
                    <div className={styles.menuItemText}>Recompensas</div>
                </Link>
            </button>

            {/* Si el usuario NO está logeado, muestra el botón de Inicio de Sesión */}
            {!isLoggedIn ? (
                <button className={styles.menuItem}>
                    <Link to="/login">
                        <img className="w-[26px] h-[26px]" src={iconLogin} alt="Iniciar sesión Icon" />
                        <div className={styles.menuItemText} style={{ textDecoration: 'none' }}>Iniciar sesión</div>
                    </Link>
                </button>
            ) : (
                <button className={styles.menuItem} onClick={handleLogout}>
                    <img className="w-[26px] h-[26px]" src={iconLogin} alt="Cerrar sesión Icon" />
                    <div className={styles.menuItemText} style={{ textDecoration: 'none' }}>Cerrar sesión </div>
                </button>
            )}

        </div>
    </div>
  );
};

export default MenuHeader;
