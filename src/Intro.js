import React from 'react';

import me from './assets/me.PNG'
import './Intro.css'

function Intro(){
    function scrollToSection() {
        var section = document.getElementById("chi sono");
        window.scrollTo({
          top: section.offsetTop - 150,
          behavior: "smooth" // Opzione per rendere lo scrolling fluido
        });
      }

    
    return (
        <div className='intro'>
            <div className='introText'>
                <h1>Ciao, sono </h1>
                <h1>Riccardo Corsini!</h1>
                <h2>uno studente presso l'università di verona</h2>
                <button onClick={scrollToSection} className='desktopButton'>Chi sono?</button>
            </div>
            <button onClick={scrollToSection} className='phoneButton'>Chi sono?</button>
            <img src={me} alt='Riccardo' className='introImage'/>
        </div>
    )
    
}

export default Intro;