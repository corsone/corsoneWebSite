import React from 'react';

import './Panel.css'

function Panel({title, text}){

    return (        
        <div className='panel' id="chi sono">
            <div className='title'>
                <h2 style={{textAlign: 'center'}}>La leggenda</h2>
            </div>
            <div className='text'>
                <p>Sono nato nel 2002 in un piccolo paesino nella provincia di Brescia, in quarta superiore inizio a scoprire la programmazione partendo dallo sviluppo web e iniziando a imparare il linguaggio C.</p>
                <p>Una volta finite le superiori decido di iscrivermi alla facoltà di informatica dell'università di Verona, dove sto studiando attualmente. Qui inizio ad apprendere nuove conoscenze approfondedo il C e l'assembly, imparando linguaggi come java e python, studiando le nozioni fondamentali riguardo il funzionamento dei calcolatori, dei sistemi operativi, delle basi di dati, dei segnali e delle reti.</p>
            </div>
        </div>
        
    )
}

export default Panel;