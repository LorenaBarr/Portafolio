import React from "react";
import "../styles/ProjectCard.css";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  // Datos de ejemplo para los proyectos
  const proyectos = [
    {
      titulo: "Cipher Love",
      imagen: "/images/CipherLove.jpg",
      enlace: "https://lorenabarr.github.io/CipherLove/",
      descripcion: "Cifrado Cesar",
      repositorio: "https://github.com/LorenaBarr/CipherLove",
    },
    {
      titulo: "Data Lovers Pokemon",
      imagen: "/images/DataLovers.jpg",
      enlace: "https://lorenabarr.github.io/DEV010-data-lovers-Pokemon-go/",
      descripcion: "Datos de pokemon Json",
      repositorio: "https://github.com/LorenaBarr/CipherLove",
    },
    {
      titulo: "Tech Share",
      imagen: "/images/TechShare.jpg",
      enlace: "https://techshare-two.vercel.app/",
      descripcion: "CRUD",
      repositorio: "https://github.com/LorenaBarr/DEV010-social-network",
    },
    {
      titulo: "Md Links",
      imagen: "/images/",
      enlace: "https://www.ejemplo.com/proyecto2",
      descripcion: "Biblioteca lee y analiza archivos en formato Markdown",
      repositorio: "https://github.com/LorenaBarr/DEV010-md-links",
    },
    {
      titulo: "Movie Api",
      imagen: "/images/movies.jpg",
      enlace: "https://dev-010-movie-challenge-fw-lo.vercel.app/",
      descripcion: "Manejo de Api de peliculas",
      repositorio: "https://github.com/LorenaBarr/DEV010-movie-challenge-fw-Lo",
    },
    {
      titulo: "Adivina el numero",
      imagen: "/images/GuessNum.jpg",
      enlace: "https://www.ejemplo.com/proyecto2",
      descripcion: "Adivinar el numero entre 1 a 100",
      repositorio:
        "https://github.com/LorenaBarr/UPSK-JAVA-003-guess-the-number-Lo",
    },
    {
      titulo: "Api fleet taxi",
      imagen: "/images/apitaxi.jpg",
      enlace: "https://www.ejemplo.com/proyecto2",
      descripcion: "Creacion de api",
      repositorio:
        "https://github.com/LorenaBarr/Lo-UPSK-JAVA-003-fleet-management-api",
    },
    // Agrega más objetos para representar los otros proyectos
  ];

  return (
    <div className="projects-container">
      <h1>Proyectos</h1>
      <div className="projects-grid">
        {/* Mapea sobre los datos de proyectos y renderiza una ProjectCard para cada uno */}
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index} // Asegúrate de proporcionar una key única para cada iteración
            titulo={proyecto.titulo}
            imagen={proyecto.imagen}
            enlace={proyecto.enlace}
            descripcion={proyecto.descripcion}
            repositorio={proyecto.repositorio}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
