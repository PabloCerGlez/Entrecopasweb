import React, { useState, useEffect } from 'react';

const KnowWines = () => {
  const [promotionsData, setPromotionsData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      console.error('No se encontró el token de autenticación en el localStorage');
      return;
    }

    // Aquí realizarías la llamada a la API para obtener los datos de las promociones
    fetch('http://entrecopas.randominteractive.site/api/view-userprofile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      setPromotionsData(data.promotions);
    })
    .catch(error => console.error('Error fetching promotions data:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % (promotionsData?.slider_wines.length || 1));
    }, 2000); // Cambiar de slide cada 2 segundos

    return () => clearInterval(interval);
  }, [promotionsData]);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEnd(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      setCurrentSlide(prevSlide => (prevSlide + 1) % (promotionsData?.slider_wines.length || 1));
    }

    if (touchStart - touchEnd < -100) {
      setCurrentSlide(prevSlide => (prevSlide - 1 + (promotionsData?.slider_wines.length || 1)) % (promotionsData?.slider_wines.length || 1));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {promotionsData && (
        <div>
          {/* Título */}
          <h2 style={{ textAlign: 'center', fontSize: '33px', fontWeight: 'bold', padding: '5px 0' }}>{promotionsData.title_wine}</h2>
          {/* Subtítulo */}
          <p style={{ textAlign: 'center',fontSize: '21px', }}>{promotionsData.description}</p>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                transition: 'transform 2.5s ease',
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {promotionsData.slider_wines.map((slide, index) => (
                <div
                  key={index}
                  style={{
                    flex: '0 0 auto',
                    width: '50%', // Mostrar dos imágenes al mismo tiempo
                    padding: '0 10px', // Agregar espacio entre las imágenes
                  }}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${index}`}
                    style={{
                      width: '130px', // Ancho deseado de las imágenes
                      height: '350px',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowWines;
