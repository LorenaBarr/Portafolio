import React from "react";
import "../styles/presentation.css";
import descargarIcono from "/public/images/descargas.png";
import wsIcon from "/public/images/ws.png";

const Presentation: React.FC = () => {
  const cvUrl =
    "https://docs.google.com/document/d/15yAV25ORZHoITsiriozJLSWLY3IAck8i/edit?usp=sharing&ouid=105532771193639595547&rtpof=true&sd=true";
  const handleDownloadCV = () => {
    window.open(cvUrl, "_blank");
  };

  const contact = "https://wa.me/message/PL6AD3Q6K22XP1";
  const handleContact = () => {
    window.open(contact, "_blank");
  };

  return (
    <section className="presentation">
      <div className="text-presentation">
        <h1>!Hola¡ Soy Lorena </h1>
        <h2>Desarrolladora Frontend</h2>
        <p>
          Bienvenido a mi portafolio. Aquí encontrarás información sobre mí y
          mis proyectos.
        </p>
        <button id="btn-contactp" onClick={handleContact}>
          <img id="icon" src={wsIcon} alt="Icono de WhatsApp" />
          Contactame
        </button>
        <button id="btn-cv" onClick={handleDownloadCV}>
          Descargar CV
          <img id="icon" src={descargarIcono} alt="Icono de descarga" />
        </button>
      </div>
      {/* <div className="perfil-img">
        <img id="foto" src="/images/fotoPortafolio.jpeg" alt="Foto de perfil" />
      </div> */}
    </section>
  );
};

export default Presentation;
