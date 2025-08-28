import { useState, useEffect, useRef } from 'react';

const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(81); // начальное значение
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        
        // Обновляем CSS переменную для глобального доступа
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    // Измеряем высоту при монтировании
    updateHeaderHeight();

    // Создаем ResizeObserver для отслеживания изменений размера header
    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    // Отслеживаем изменения размера окна
    const handleResize = () => {
      setTimeout(updateHeaderHeight, 100); // небольшая задержка для завершения CSS анимаций
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return { headerHeight, headerRef };
};

export default useHeaderHeight;
