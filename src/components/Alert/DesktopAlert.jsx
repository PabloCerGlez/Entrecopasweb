
import styles from 'styles/App.module.css';
import logotipo from "assets/images/Logo.png";
import iconCopas from "assets/images/icono-entrecopas.png";

function DesktopAlert() {
  return (
    <div className={styles.App}>
        <div className={styles.desktopContainer}>
          <img className={styles.logoDesktop} src={logotipo} alt="placeholder" />
          <img className={styles.iconEntreCopasDesktop} src={iconCopas} alt="placeholder" />
          <div className={styles.textContainerDesktop}>Lo sentimos, abre este sitio en tu celular <br/> para una mejor experiencia.</div>
        </div>
    </div>
  );
}

export default DesktopAlert;
