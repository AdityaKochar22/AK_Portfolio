import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>adityaKochar23@gmail.com</p>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>Noida, India</p>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>+91 8005538426</p>
            </div>
          </div>

          <div className="contact-social">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://github.com/AdityaKochar22" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/aditya-kochar-492622222/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/AdityaKoch96922" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:dityaKochar23@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
