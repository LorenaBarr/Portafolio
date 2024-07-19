import React from 'react';
import '../styles/aboutMe.css';
import profilePic from '/public/images/foto.jpg';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
          Soy una desarrolladora web con formación en educación y ciencias sociales, apasionada por la tecnología y el impacto social. Actualmente, estoy cursando un bootcamp en desarrollo de aplicaciones web en la Universidad Sergio Arboleda🚀, donde aprendo sobre diseño web, programación orientada a objetos, estructuras de datos y bases de datos relacionales.
        </p>
        <p>
          💼Mi experiencia académica practica más reciente fue en Laboratoria💻, una organización que capacita a mujeres en el sector tecnológico. Allí, trabajé en equipo en varios proyectos de desarrollo web front-end, usando HTML, CSS, JavaScript y Firebase🔧. Implementé funcionalidades de cifrado, filtrado, ordenamiento y autenticación, y diseñé aplicaciones web tipo SPA con contenido interactivo. 🏆Además, participante del Codefest 🌟, evento de innovación y tecnología organizado por Globant. Certificada en Scrum 📋 y en inteligencia emocional 🧠. Mi objetivo es seguir aprendiendo y creciendo como profesional, y contribuir a la transformación digital y social de mi país 🌍.
        </p>
      </div>
      <div className="about-me-image">
        <img src={profilePic} alt="Foto de perfil" />
      </div>
    </div>
  );
};

export default AboutMe;