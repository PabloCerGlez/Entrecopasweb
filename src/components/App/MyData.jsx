import React from 'react';

const RegisterLogin = () => {
    const styles = {
   
        contentContainer: {
            
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Athelas',
            color: '#602131',
            marginTop: '50px', // Espaciado superior para separar del borde
            marginBottom: '40px' // Espaciado inferior para separar del formulario
        },
        title: {
            fontSize: '32px',
            width: '110%',
            fontStyle: 'italic',
            lineHeight: '38.40px',
            textAlign: 'center', // Cambiado a 'center' para centrar el texto
       
        },
        container: {
            width: '100%',
            margin: 'auto',
        },
        socialButtons: {
            height: '80%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 20,
        },
        btn: {
            padding: '14px 30px',
            borderRadius: 50,
            border: '1px #602131 solid',
            color: '#602131',
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer',
            display: 'block',
            width: '80%',
            margin: '20px auto',
            alignItems: 'center',
            justifyContent: 'center',
        },
        divider: {
            textAlign: 'left',
            marginBottom: 20,
            color: '#602131',
            fontSize: 14,
        },
        input: {
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
        },
        checkboxGroup: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 10,
            color: '#602131',
        },
        loginLink: {
            textAlign: 'center',
            marginTop: 20,
            color: '#602131',
        },
    };

    return (
        <div style={styles.body}>

            <div style={styles.container}>
            <section style={styles.contentContainer}>
            <h1 style={styles.title}>Tus datos</h1>
           
        </section>
                <form>
                    <input type="text" id="nombre" required placeholder="Nombre*" style={styles.input} />
                    <input type="text" id="apellidos" required placeholder="Apellidos*" style={styles.input} />
                    <input type="email" id="correo" required placeholder="Correo*" style={styles.input} />
                    <select id="estado" required style={styles.input}>
                        <option value="" disabled selected>Estado*</option>
                        <option>Aguascalientes</option>
                        {/* ... otros estados ... */}
                        <option>Zacatecas</option>
                    </select>
                    <input type="date" id="fecha-nacimiento" placeholder="Fecha de nacimiento" style={styles.input} />
                    <select id="genero" required style={styles.input}>
                        <option value="" disabled selected>Género*</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                    <input type="text" id="telefono" placeholder="Teléfono" style={styles.input} />
                    <input type="password" id="password" required placeholder="Contraseña*" style={styles.input} />
                    <input type="password" id="confirm-password" required placeholder="Confirmar contraseña*" style={styles.input} />

               
                  

                    <input type="submit" value="Guardar" style={styles.btn} />
                </form>

            </div>
        </div>
    );
}

export default RegisterLogin;
