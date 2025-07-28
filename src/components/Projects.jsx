import React from "react";
import "./Projects.css";

const Projects = () =>{
    const projects = [
        {
        id: 1,
        name:"Pokémon Project",
        imageUrl: "../img/2025-07-28.png",
        projectUrl: "https://pokeproyectofinal.netlify.app",
        description: "Un proyecto interactivo basado en Pokémon donde utilizo socket.io para jugar a tiempo real, API pokémon para pokédex y pasarela de pago para la tienda de peluches."
        },
         {
        id: 2,
        name:"Tienda Nintendo",
        imageUrl: "../img/tienda_nintendo.png",
        projectUrl: "https://challenge-u2s14.onrender.com/products",
        description: "Tienda creada con Backend de tematica Nintendo, solo el admin puede interactuar."
        },

    ]
    return (
        <div className="projects-section">
            <h2>Mis Proyectos</h2>
        
        <div className="projects-grid">
            {projects.map((project) =>(
                <div key={project.id} className="project-card">
                    <a
                    href ={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image-link"
                    >
                    <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="project-image"
                    />
                    <div className="image-overlay">
                        <span className="overlay-text">Ver Proyecto</span>
                    </div>
                    </a>
                    <div className="project-content">
                        <h3 className="project-title">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="button-wrapper">
                            <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="visit-button"
                            >
                                Visitar Proyecto
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
    )
}

export default Projects;