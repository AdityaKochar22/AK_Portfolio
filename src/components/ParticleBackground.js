import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      
      // Slightly longer animation duration
      particle.style.animation = `float ${5 + Math.random() * 8}s infinite`;
      
      document.body.appendChild(particle);
      
      // Longer lifetime
      setTimeout(() => {
        particle.remove();
      }, 13000); // Increased from 8000 to 13000
    };

    // Create even more initial particles
    for (let i = 0; i < 100; i++) { // Increased from 50 to 100
      createParticle();
    }

    // Create new particles very frequently
    const interval = setInterval(() => {
      createParticle();
    }, 100); // Reduced from 500ms to 200ms for more frequent creation

    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default ParticleBackground;
