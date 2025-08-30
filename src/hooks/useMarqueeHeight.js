import { useState, useEffect, useRef } from 'react';

const useMarqueeHeight = () => {
  const [marqueeHeight, setMarqueeHeight] = useState(46);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const updateMarqueeHeight = () => {
      if (marqueeRef.current) {
        const height = marqueeRef.current.offsetHeight;
        setMarqueeHeight(height);
        
        document.documentElement.style.setProperty('--marquee-height', `${height}px`);
      }
    };

    updateMarqueeHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateMarqueeHeight();
    });

    if (marqueeRef.current) {
      resizeObserver.observe(marqueeRef.current);
    }

    // Отслеживаем изменения размера окна
    const handleResize = () => {
      setTimeout(updateMarqueeHeight, 100); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return { marqueeHeight, marqueeRef };
};

export default useMarqueeHeight;
