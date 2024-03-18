import React from 'react';
import '../styles/footer.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <p>© 2024 Lorena Barrera</p>
      <div>
        <a href="https://www.linkedin.com/in/lorena-barrera-developer-frontend-web/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/LorenaBarr" target="_blank" rel="noopener noreferrer">
          <img src="/images/logotipo-de-github.png" alt="GitHub" />
        </a>
        <a href="https://twitter.com/LorenaBarr82483" target="_blank" rel="noopener noreferrer">
          <img src="/images/logotipo-de-twitter-sobre-fondo-negro.png" alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/lorenabarrerafrontenddev/" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;



