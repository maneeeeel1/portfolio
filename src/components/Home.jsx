import React from "react";
import "./Home.css";

const Home = () =>{
    return (
        <div className="home-section">
            <h2>¡Bienvenido/a a mi Portfolio! </h2>

            <p>En este espacio, te invito a explorar mi trayectoria como desarrollador web Full Stack.<br />
            Aquí podrás conocer un poco más sobre mí, descubrir mis habilidades y, lo más importante, sumergirte en los proyectos que he desarrollado.<br />
            Mi objetivo es aprender tecnologías y crear proyectos eficientes y atractivos.<br />
            ¡Espero que disfrutes el recorrido!
            </p>
            <div className="logos-home">
                <a href="https://github.com/maneeeeel1">
                    <img src="../logo_github.png" alt="github" className="github-logo"/>
                </a>

                <a href="https://www.linkedin.com/in/manel-bueno-molina-ab5379343/">
                    <img src="../logo_lknd.png" alt="linkedin" className="linked-logo"/>
                </a>
            </div>
        </div>
    )
}

export default Home;