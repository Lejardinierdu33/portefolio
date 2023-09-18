import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Affiche le bouton lorsque l'utilisateur fait défiler la page vers le bas
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour faire défiler la page vers le haut
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
}

export default ScrollToTopButton;
