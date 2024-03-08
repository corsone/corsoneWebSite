import React from 'react';

import './ProjectCard.css'

function ProjectCard({image, title, description}){
    return (
        <div className="card">
            <img src={image[0]} alt='ligth' className='cardLogo'></img>
            <img src={image[1]} alt='dark' className='cardLogoBlack'></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard;