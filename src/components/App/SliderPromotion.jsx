import React, { useState, useEffect, useRef } from 'react';

const CarouselComponent = () => {
  const [promotionsData, setPromotionsData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const placeholderImage = 'http://entrecopas.randominteractive.site/uploads/promotions/1708068895.png';

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

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEnd(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      setCurrentSlide(prevSlide => Math.min(prevSlide + 1, promotionsData?.slider_wines.length - 1 || 0));
    }

    if (touchStart - touchEnd < -100) {
      setCurrentSlide(prevSlide => Math.max(prevSlide - 1, 0));
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {promotionsData && (
        <div>
          {/* Título */}
          <h2 style={{ fontWeight: 'bold', fontSize: '33px', marginTop: '20px' }}>{promotionsData.slider_promo}</h2>
          {/* Carrusel */}
          <div
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              width: '90%',
              margin: '0 auto',
              overflow: 'hidden',
              marginTop: '20px',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {promotionsData.slider_wines.map((_, index) => (
                <div
                  key={index}
                  style={{
                    flex: '0 0 auto',
                    width: '100%',
                    marginRight: '10px',
                    borderRadius: '5px',
                  }}
                >
                  <img
                    src={placeholderImage}
                    alt={`Slide ${index}`}
                    style={{
                      width: '100%',
                      height: '130px',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Puntos de botón */}
          <div style={{ marginTop: '20px' }}>
            {promotionsData.slider_wines.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  margin: '0 5px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === index ? '#602131' : '#C1A1A7',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;
