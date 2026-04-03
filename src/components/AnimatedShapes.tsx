import { useState, useEffect } from 'react';

const shapes = Array.from({ length: 72 }, (_, i) => `/Framer User Content/Shape ${i + 1}.svg`);

export const AnimatedShapes = () => {
  const [currentShape, setCurrentShape] = useState(0);
  const [isBlack, setIsBlack] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentShape((prev) => (prev + 1) % shapes.length);
        setIsBlack((prev) => !prev);
        setVisible(true);
      }, 250);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-shapes-container">
      <img
        src={shapes[currentShape]}
        alt=""
        style={{
          filter: isBlack ? 'brightness(0)' : 'brightness(1) invert(1)',
          width: '150px',
          height: '150px',
          objectFit: 'contain',
          opacity: visible ? 0.3 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />
    </div>
  );
};
