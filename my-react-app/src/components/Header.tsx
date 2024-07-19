import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Portafolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre mí</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

