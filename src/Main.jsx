import React, { useState, useEffect } from 'react';
import DesktopAlert from "./components/Alert/DesktopAlert";
import LayoutMyData from 'layouts/LayoutMyData';
import LayoutChangePassword from 'layouts/LayoutChangePassword';
import LayoutLogin from 'layouts/LayoutLogin';
import LayoutLoginRegister from 'layouts/LayoutLoginRegister';
import LayoutNewPassword from 'layouts/LayoutNewPassword';
import LayoutTerm from 'layouts/LayoutTerm';
import LayoutHelp from 'layouts/LayoutHelp';
import LayoutComencemos from 'layouts/LayoutComencemos';
import LayoutMiEvaluacion from 'layouts/LayoutMiEvaluacion';
import LayoutCode from 'layouts/LayoutCode';
import LayoutRecompesas from 'layouts/LayoutRecompesasList';
import LayoutEvaluacionUno from 'layouts/LayoutEvaluacionUno';
import LayoutEvaluacionDos from 'layouts/LayoutEvaluacionDos';
import LayoutEvaluacionTres from 'layouts/LayoutEvaluacionTres';
import LayoutEvaluacionSeis from 'layouts/LayoutEvaluacionSeis';
import LayoutSinCuenta from 'layouts/LayoutSinCuenta';




import App from 'components/App/App';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Main() {
  // Declare a state variable 'isDesktop' to keep track of the window size.
  // Initialize it to 'true' if the window width is greater than 1024 pixels, otherwise 'false'.
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 820);

  // Set up a side effect to run after render
  useEffect(() => {
    // Define a function to handle the window resize event
    const handleResize = () => {
      // Update the 'isDesktop' state based on the window width
      setIsDesktop(window.innerWidth > 820);
    };

    // Attach the handleResize function to the window resize event
    window.addEventListener('resize', handleResize);

    // Cleanup: Detach the handleResize function from the window resize event when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // The empty array means this useEffect runs once on mount and cleanup on unmount

  // Render: Display the 'DesktopAlert' component if 'isDesktop' is true, otherwise display a text paragraph
  return (
    <Router>
    <Routes>
        <Route path="/login" element={isDesktop ? <DesktopAlert/> : <LayoutLogin/>} />
        <Route path="/registro"  element={isDesktop ? <DesktopAlert/> : <LayoutLoginRegister/>} />
        <Route path="/termino-y-condiciones"  element={isDesktop ? <DesktopAlert/> : <LayoutTerm/>} />
        <Route path="/cambio-contrasena"  element={isDesktop ? <DesktopAlert/> : <LayoutChangePassword/>} />
        <Route path="/profile"  element={isDesktop ? <DesktopAlert/> : <LayoutMyData/>} />
        <Route path="/nueva-password"  element={isDesktop ? <DesktopAlert/> : <LayoutNewPassword/>} />
        <Route path="/centro-ayuda"  element={isDesktop ? <DesktopAlert/> : <LayoutHelp/>} />
        <Route path="/comencemos"  element={isDesktop ? <DesktopAlert/> : <LayoutComencemos/>} />
        <Route path="/mi-evaluacion"  element={isDesktop ? <DesktopAlert/> : <LayoutMiEvaluacion/>} />
        <Route path="/mi-evaluacion"  element={isDesktop ? <DesktopAlert/> : <LayoutMiEvaluacion/>} />
        <Route path="/perfil-code"  element={isDesktop ? <DesktopAlert/> : <LayoutCode/>} />
        <Route path="/recompesas"  element={isDesktop ? <DesktopAlert/> : <LayoutRecompesas/>} />
        <Route path="/evaluacion-uno"  element={isDesktop ? <DesktopAlert/> : <LayoutEvaluacionUno/>} />
        <Route path="/evaluacion-dos"  element={isDesktop ? <DesktopAlert/> : <LayoutEvaluacionDos/>} />
        <Route path="/evaluacion-tres"  element={isDesktop ? <DesktopAlert/> : <LayoutEvaluacionTres/>} />
        <Route path="/evaluacion-seis"  element={isDesktop ? <DesktopAlert/> : <LayoutEvaluacionSeis/>} />
        <Route path="/sin-cuenta"  element={isDesktop ? <DesktopAlert/> : <LayoutSinCuenta/>} />


              
        <Route path="/"  element={isDesktop ? <DesktopAlert/> : <App/>} />
    </Routes>
</Router> 

);
}

// Export the App component as the default export
export default Main;