import React, { useState, useEffect } from 'react';
import Navbar from 'components/App/Navbar';
import EvaluacionPrincipal from 'components/App/EvaluacionVisual';
import Footer from 'components/App/Footer';
import BackButton from 'components/App/BackButton'

function LayoutTerm() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);


  const styles = {

  

};
  return (
    <div>
      

        <EvaluacionPrincipal/>

     
  
  <Footer/>
    </div>
  );
}

export default LayoutTerm;
