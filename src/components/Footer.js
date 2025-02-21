import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            © {new Date().getFullYear()} Aditya Kochar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
