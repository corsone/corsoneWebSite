import React from 'react';

import ProjectCard from './ProjectCard';

import './Projects.css'
import game from './assets/dice-solid.png';
import passport from './assets/id-card-solid.png';
import web from './assets/globe-solid.png';

function Projects(){
    const projects = [
        {
            image: game,
            title: 'forza 4',
            description: 'Il gioco, sviluppato in linguaggio C, permette di sfidare un altro giocatore oppure il computer tramite l\'utilizzo del terminale.',
        },
        {
            image: passport,
            title: 'gestore passaporti',
            description: 'L\'applicazione, sviluppata in linguaggio java, è un progetto per la gestione delle richieste e dei ritiri dei passaporti.',
        },
        {
            image: web,
            title: 'sito web personale',
            description: 'Sito web personale creato tramite il framework javascript React',
        }];

    return (
        <div className='projects'>
            <h2>I miei progetti</h2>
            <div className='cardContainer'>
                {projects.map((project) => {
                    return <ProjectCard image={project.image} title={project.title} description={project.description}></ProjectCard>
                })}
            </div>
        </div>
    )
}

export default Projects;