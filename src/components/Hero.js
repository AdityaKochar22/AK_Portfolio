import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Software Developer',
        'Data Analyst',
        'AI/ML Engineer'
      ],
      typeSpeed: 70,      // Increased from 50
      backSpeed: 50,      // Increased from 30
      backDelay: 1500,    // Increased from 1000
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <h1>ADITYA KOCHAR</h1>
        <p>I'm a <span ref={typedRef}></span></p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/aditya-kochar-492622222/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/AdityaKochar22" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
