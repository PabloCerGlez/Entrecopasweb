import React from 'react';
import ReactDOM from 'react-dom'; // Asegurándonos de que ReactDOM se importe correctamente
import { GoogleOAuthProvider } from '@react-oauth/google';

import Main from './Main'; // Asegurándonos de que la importación relativa sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="147324902052-fvdg25jfa6jmqnq88i77gl4e8d7dtqdq.apps.googleusercontent.com">
        <React.StrictMode>
        <Main />
        </React.StrictMode>
    </GoogleOAuthProvider>,



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
