import React from 'react';
import Panel from './Panel'
import Projects from './Projects';
import Intro from './Intro';

import './Body.css'

function Body(){
    const title = "La leggenda";
    const text = "Sono nato nel 2002 in un piccolo paesino nella provincia di Brescia, in quarta superiore inizio a scoprire la programmazione partendo dallo sviluppo web e iniziando a imparare il linguaggio C. Una volta finite le superiori decido di iscrivermi alla facoltà di informatica dell'università di Verona, dove sto studiando attualmente. Qui inizio ad apprendere nuove conoscenze approfondedo il C e l'assembly, imparando linguaggi come java e python, studiando le nozioni fondamentali riguardo il funzionamento dei calcolatori, dei sistemi operativi, delle basi di dati, dei segnali e delle reti.";
    
    return (
        <div className='body'>
            <Intro></Intro>
            <Panel title={title} text={text}></Panel>
            <Projects></Projects>
        </div>
    )
}

export default Body;