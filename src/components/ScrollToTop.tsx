import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    // (hash navigation is handled by HomePage component)
    if (!window.location.hash) {
      const scrollToTop = () => {
        // Try scrolling the window
        window.scrollTo(0, 0);
        
        // Try scrolling document elements
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Try scrolling the root element (React app)
        const rootElement = document.getElementById('root');
        if (rootElement) {
          rootElement.scrollTop = 0;
        }
        
        // Try finding and scrolling any scrollable container
        const scrollableElements = document.querySelectorAll('[style*="overflow"]');
        scrollableElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.scrollTop = 0;
          }
        });
      };

      // Immediate scroll
      scrollToTop();
      
      // Backup scroll attempts
      const timeoutId1 = setTimeout(scrollToTop, 10);
      const timeoutId2 = setTimeout(scrollToTop, 50);
      const timeoutId3 = setTimeout(scrollToTop, 100);

      // RequestAnimationFrame approach
      requestAnimationFrame(() => {
        scrollToTop();
        requestAnimationFrame(scrollToTop);
      });

      return () => {
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
        clearTimeout(timeoutId3);
      };
    }
  }, [pathname, search]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;