import React from 'react';

const ProjectCard: React.FC<{
  titulo: string;
  imagen: string;
  enlace: string;
  descripcion: string;
  repositorio: string;
}> = ({ titulo, imagen, enlace, descripcion, repositorio }) => {
  return (
    <div className="project-card">
      <h2>{titulo}</h2>
      <a href={enlace} target="_blank" rel="noopener noreferrer">
        <img src={imagen} alt={titulo} />
      </a>
      <p>{descripcion}</p>
      <p>
        <a
          href={repositorio}
          target="_blank"
          rel="noopener noreferrer"
          className="repository-link"
        >
          {repositorio}
        </a>
      </p>
    </div>
  );
};

export default ProjectCard;