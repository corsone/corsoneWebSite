import React from 'react';

import './ProjectCard.css'

function ProjectCard({image, title, description}){
    return (
        <div className="card">
            <img src={image} className='cardLogo'></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard;