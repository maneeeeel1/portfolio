import React, {useState} from "react";
import "./Aboutme.css";


const Aboutme = () =>{
    const [showCertificatesImages, setShowCertificatesImages] = useState(false);

    const handleToggleCertificates = () =>{
        setShowCertificatesImages(!showCertificatesImages);
    };

    return (
        <div className="about-section">
            <h2>Manel Bueno Molina</h2>
                <p>¡Hola! Soy Manel, un apasionado desarrollador FullStack con 1 año de experiencia y estudiante de Ciberseguridad.</p>
        <div className="qualifications">
            <h3>Mis Titulaciones IT</h3>
            <ul>
                <li>
                    <p>CFGM Sistemas Microinformáticos y Redes - [INS Guinovarda] - [2017, 2019]</p>
                </li>

                <li>
                    <p>Bootcamp FullStack Developer - [TheBridge] - [2025]</p>
                </li>
            </ul>

            <div className="cert-link">
                <button className="link-cert-btn" onClick={handleToggleCertificates}>
                    {showCertificatesImages ? "OCULTAR" : "TECNOLOGIAS USADAS"} 
                </button>
                {showCertificatesImages && (
                <div className="certificados-grid">
                    <img src="../certificados/HTML.png" alt="html" className="img"/>
                    <img src="../certificados/CSS.png" alt="css" className="img"/>
                    <img src="../certificados/JavaScript.png" alt="js" className="img"/>
                    <img src="../certificados/ES6.png" alt="es6" className="img"/>
                    <img src="../certificados/GitHub.png" alt="github" className="img"/>
                    <img src="../certificados/Node.js.png" alt="node" className="img"/>
                    <img src="../certificados/MongoDB.png" alt="mongo" className="img"/>
                    <img src="../certificados/SQL.png" alt="sql" className="img"/>
                    <img src="../certificados/Express.js.png" alt="express" className="img"/>
                </div>
            )}
            </div>
                <li>
                    <p>Introducción a la Ciberseguridad - [Cisco] - [2025]</p>
                </li>
                <div className="cert-link">
                <button className="link-cert-btn" onClick={handleToggleCertificates}>
                    {showCertificatesImages ? "OCULTAR" : "TECNOLOGIAS USADAS"} 
                </button>
                {showCertificatesImages && (
                <div className="certificados-grid">

                    <img src="../certificados/INTRO_CIBER.png" alt="intro_ciber" className="img"/>

                </div>
                )}
            </div>

                <li>
                    <p>Cursando Étical Hacker - [Cisco] - [2025]</p>
                </li>
        </div>

        <div className="cv-link">
            <h3>¿Quieres saber más?</h3>
                <button className="btn">
                    <a href="../pdf/CV Manel.pdf" download="CV Manel.pdf">
                        DESCARGAR CV
                    </a>
                </button>
        </div>
    </div>
    )
}

export default Aboutme;

