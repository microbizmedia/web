import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @ts-ignore
import JOS from 'jos-animation';

// Custom hook for initializing JOS animations
const useJOSAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    JOS.init({
      passive: false,
      once: true,
      animation: 'fade-up',
      timingFunction: 'ease',
      threshold: 0,
      delay: 0.5,
      duration: 0.7,
      scrollDirection: 'down',
      rootMargin: '0% 0% 15% 0%',
    });
  }, []);

  useEffect(() => {
    JOS.refresh();
  }, [location.pathname]);

  //   // Scroll to hash target and refresh JOS
  // useEffect(() => {
  //   if (location.hash) {
  //     const el = document.querySelector(location.hash);
  //     if (el) {
  //       // Give DOM time to render
  //       setTimeout(() => {
  //         el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  //         // Wait for scroll before refreshing JOS
  //         setTimeout(() => {
  //           JOS.refresh();
  //         }, 0.1);
  //       }, 0.1); // Short delay before scrolling
  //     }
  //   }
  // }, [location.hash]);

};

export default useJOSAnimation;
